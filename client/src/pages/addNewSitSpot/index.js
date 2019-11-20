import React, { Component } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import addPlaceValidation from '../../utils';

import { StepsQuestions } from '../../components';
import Questions from './fakeData';

import './index.css';

const Classes = [
  'welcome',
  'name',
  'website',
  'country',
  'city',
  'type',
  'upload-img',
  'upload-img',
];

class AddNewSitSpot extends Component {
  state = {
    data: {
      name: '',
      linkSite: '',
      country: '',
      city: '',
      businessType: '',
      img1: undefined,
      img2: undefined,
    },
    errors: {
      name: null,
      country: null,
      city: null,
      businessType: null,
    },
    currentStep: 0,
  };

  onSubmit = () => {
    const {
      data,
      data: { businessType },
    } = this.state;
    const { history } = this.props;
    const formData = new FormData();
    Object.entries(data).forEach(
      ([key, value]) => !!value && formData.append(key, value)
    );

    axios
      .post('/api/v1/sitspot', formData, {
        headers: { 'content-type': 'multipart/formdata' },
      })
      .then(({ data: id }) =>
        history.push(`/add-review/${businessType}/${id}`)
      );
  };

  handleChange = (value, dataKey) => {
    this.setState(
      prevState => ({
        ...prevState,
        data: { ...prevState.data, [dataKey]: value },
      }),
      () => this.handleValidate(false)
    );
  };

  handleError = (value, errKey) => {
    this.setState(prevState => ({
      ...prevState,
      errors: { ...prevState.errors, [errKey]: value || null },
    }));
  };

  handleValidate = checkEvent => {
    const {
      data: { name, country, city, businessType },
      currentStep,
    } = this.state;

    if (currentStep === 1) {
      addPlaceValidation.placeValidName
        .validate({ name })
        .then(() => {
          if (checkEvent) this.next();
          this.handleError(null, 'name');
        })
        .catch(err => {
          this.handleError(err.message, 'name');
        });
    } else if (currentStep === 3) {
      addPlaceValidation.placeValidCountry
        .validate({ country })
        .then(() => {
          if (checkEvent) this.next();
          this.handleError(null, 'country');
        })
        .catch(err => this.handleError(err.message, 'country'));
    } else if (currentStep === 4) {
      addPlaceValidation.placeValidCity
        .validate({ city })
        .then(() => {
          if (checkEvent) this.next();
          this.handleError(null, 'city');
        })
        .catch(err => this.handleError(err.message, 'city'));
    } else if (currentStep === 5) {
      addPlaceValidation.placeValidBusinessType
        .validate({ businessType })
        .then(() => {
          if (checkEvent) this.next();
          this.handleError(null, 'businessType');
        })
        .catch(err => this.handleError(err.message, 'businessType'));
    }
    // else if (currentStep === 0) {
    //   this.next();
    // }
  };

  next = () =>
    this.setState(({ currentStep }) => ({
      currentStep: currentStep + 1,
    }));

  prev = () =>
    this.setState(({ currentStep }) => ({
      currentStep: currentStep - 1,
    }));

  render() {
    const { currentStep, data, errors } = this.state;

    return (
      <div id="add-place" className="add-place">
        <div className="add-place__header"> </div>
        <div className="add-place__wrapper">
          <StepsQuestions
            required={{ 1: true, 3: true, 4: true, 5: true }}
            classes={Classes}
            values={data}
            errors={errors}
            questions={Questions}
            currentStep={currentStep}
            funcs={{
              next: this.next,
              prev: this.prev,
              handleChange: this.handleChange,
              onSubmit: this.onSubmit,
              handleError: this.handleError,
              handleValidate: this.handleValidate,
            }}
          />
        </div>
      </div>
    );
  }
}

AddNewSitSpot.propTypes = {
  history: propTypes.shape({ push: propTypes.func.isRequired }).isRequired,
};
export default AddNewSitSpot;
