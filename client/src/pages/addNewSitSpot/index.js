import React from 'react';
import propTypes from 'prop-types';
import { StepsQuestions } from '../../components';
import { addPlace } from '../../services/api';

import './style.css';

class AddNewSitspot extends React.Component {
  state = {
    loading: false,
  };

  onSubmit = data => {
    this.setState({ loading: true });
    const { history } = this.props;
    const { type } = data;
    const formData = new FormData();

    Object.entries(data).forEach(
      ([key, value]) => !!value && formData.append(key, value)
    );

    addPlace(formData).then(({ data: id }) =>
      history.push(`/add-review/${type}/${id}`)
    );
  };

  render() {
    const { loading } = this.state;
    return (
      <div id="add-place" className="add-place">
        <div className="add-place__header"> </div>
        <div className="add-place__content">
          <StepsQuestions onSubmit={this.onSubmit} loading={loading} />
        </div>
      </div>
    );
  }
}

AddNewSitspot.propTypes = {
  history: propTypes.shape({ push: propTypes.func.isRequired }).isRequired,
};

export default AddNewSitspot;
