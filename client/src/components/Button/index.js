import React from 'react';
import propTypes from 'prop-types';

import './style.css';

const Button = ({ onClick, className, children, value }) => (
  <button
    type="button"
    value={value}
    onClick={onClick}
    className={`button ${className}`}
  >
    {children}
  </button>
);

Button.defaultProps = {
  children: [],
  value: '',
};

Button.propTypes = {
  onClick: propTypes.func.isRequired,
  className: propTypes.string.isRequired,
  // children propTypes from https://stackoverflow.com/a/42122662
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
  value: propTypes.string,
};

export default Button;
