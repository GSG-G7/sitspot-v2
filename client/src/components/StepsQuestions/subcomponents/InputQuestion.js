import React from 'react';
import PropTypes from 'prop-types';

const InputQuestion = ({ value, handleStateChange }) => (
  <input
    className="input "
    type="text"
    value={value}
    onChange={e => handleStateChange(e.target.value)}
  />
);
InputQuestion.propTypes = {
  value: PropTypes.string.isRequired,
  handleStateChange: PropTypes.func.isRequired,
};
export default InputQuestion;
