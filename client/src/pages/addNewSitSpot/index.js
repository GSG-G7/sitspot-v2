import React, { Component } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';

import { StepsQuestions } from '../../components';
import Questions from './fakeData';

import './index.css';

const Classes = [
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
      .post('/api/v1/place', formData, {
        headers: { 'content-type': 'multipart/formdata' },
      })
      .then(({ data: id }) =>
        history.push(`/add-review/${businessType}/${id}`)
      );
  };

  handleChange = (value, dataKey) => {
    this.setState(prevState => ({
      ...prevState,
      data: { ...prevState.data, [dataKey]: value },
    }));
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
    const { currentStep, data } = this.state;
    return (
      <div id="add-place" className="add-place">
        <div className="add-place__header"> </div>
        <div className="add-place__wrapper">
          <StepsQuestions
            classes={Classes}
            values={data}
            questions={Questions}
            currentStep={currentStep}
            funcs={{
              next: this.next,
              prev: this.prev,
              handleChange: this.handleChange,
              onSubmit: this.onSubmit,
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
