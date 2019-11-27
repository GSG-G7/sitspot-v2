import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const RadioGroup = ({ value, options, clickHandler }) => (
  <div>
    {Object.entries(options).map(([key, text]) => {
      const keyLowered = key.toLowerCase();
      return (
        <button
          key={keyLowered}
          className={`radio-button ${keyLowered === value ? 'active' : ''}`}
          type="button"
          onClick={() => clickHandler(keyLowered)}
        >
          {text}
        </button>
      );
    })}
  </div>
);

RadioGroup.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default RadioGroup;
