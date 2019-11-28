import React from 'react';

import geers from '../../assets/images/geers.png';

import './style.css';

const Error500 = () => (
  <div>
    <div className="error500-background-header" />
    <div className="error500-parent">
      <h1 className="text500">500</h1>
      <h2 className="error-text">
        Unexpected Error <b>:(</b>
      </h2>
      <img src={geers} alt="geers" className="geers-image" />
    </div>
  </div>
);

export default Error500;
