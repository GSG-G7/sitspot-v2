import React from 'react';
import propTypes from 'prop-types';

import './style.css';

const Button = ({ onClick, className, children, style }) => (
  <button
    style={style}
    type="button"
    onClick={onClick}
    className={`button ${className}`}
  >
    {children}
  </button>
);

Button.defaultProps = {
  children: [],
  style: {},
  onClick: () => {},
};

Button.propTypes = {
  onClick: propTypes.func,
  className: propTypes.string.isRequired,
  style: propTypes.shape({}),
  // children propTypes from https://stackoverflow.com/a/42122662
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
};

export default Button;
