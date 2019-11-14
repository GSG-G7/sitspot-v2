import React from 'react';
import propTypes from 'prop-types';

import './style.css';

const MagicalFactor = ({ name, src, followUp }) => (
  <div className="magical">
    <div className="magical__keyword">
      <div className="magical__keyword__img-container">
        <img src={src} alt={name} className="magical__keyword__img-img" />
      </div>
      <p
        className={`magical__keyword-label${
          name.length > 10 ? '--smaller' : ''
        }`}
      >
        {name}
      </p>
    </div>
    <p className="magical__review">{followUp}</p>
  </div>
);

MagicalFactor.propTypes = {
  name: propTypes.string.isRequired,
  src: propTypes.string.isRequired,
  followUp: propTypes.string.isRequired,
};

export default MagicalFactor;
