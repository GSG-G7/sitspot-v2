import React from 'react';
import PropTypes from 'prop-types';

const ErrorDisplay = ({ error }) => <span>{error}</span>;
ErrorDisplay.propTypes = { error: PropTypes.string.isRequired };
export default ErrorDisplay;
