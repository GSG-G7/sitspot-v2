import React from 'react';
import propTypes from 'prop-types';
import { Icon } from 'antd';
import './style.css';

const Fab = ({ onClick }) => (
  <button type="button" onClick={onClick} className="floating-action">
    <Icon type="plus" />
  </button>
);
Fab.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default Fab;
