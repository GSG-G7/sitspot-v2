import React from 'react';
import propTypes from 'prop-types';
import './style.css';

const Button = ({ onClick, className, children }) => (
  <button type="button" onClick={onClick} className={`button ${className}`}>
    {children}
  </button>
);
Button.defaultProps = {
  children: [],
};
Button.propTypes = {
  onClick: propTypes.func.isRequired,
  className: propTypes.string.isRequired,
  children: propTypes.arrayOf(propTypes.element),
};

export default Button;
