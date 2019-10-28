import React from 'react';
import propTypes from 'prop-types';
import './style.css';

const Button = ({ onClick, className, children, style }) => (
  <button
    type="button"
    onClick={onClick}
    className={`button ${className}`}
    style={style}
  >
    {children}
  </button>
);
Button.defaultProps = {
  style: {},
  children: [],
};
Button.propTypes = {
  onClick: propTypes.func.isRequired,
  className: propTypes.string.isRequired,
  style: propTypes.shape(),
  children: propTypes.arrayOf(propTypes.element),
};

export default Button;
