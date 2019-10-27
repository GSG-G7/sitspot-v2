import React from 'react';
import propTypes from 'prop-types';
import './style.css';

const Fab = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="circle-main-color-button floating plus-text"
  >
    +
  </button>
);

Fab.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default Fab;
