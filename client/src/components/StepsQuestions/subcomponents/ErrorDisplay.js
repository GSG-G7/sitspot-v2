import React from 'react';
import PropTypes from 'prop-types';

const ErrorDisplay = ({ error }) => (
  <div className="error-box">
    <p className="error-box__message">{error}</p>
  </div>
);

ErrorDisplay.propTypes = { error: PropTypes.string.isRequired };

export default ErrorDisplay;
