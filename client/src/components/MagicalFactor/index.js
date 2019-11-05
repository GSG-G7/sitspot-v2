import React from 'react';
import propTypes from 'prop-types';

import Keywords from '../../assets/Keywords';

import './style.css';

const MagicalFactor = ({ value: { text, imgSrc }, reviewText }) => (
  <div className="magical">
    <div className="magical__keyword">
      <div className="magical__keyword__img-container">
        <img
          src={Keywords[imgSrc]}
          alt={text}
          className="magical__keyword__img-img"
        />
      </div>
      <p
        className={`magical__keyword-label${
          text.length > 10 ? '--smaller' : ''
        }`}
      >
        {text}
      </p>
    </div>
    <p className="magical__review">{reviewText}</p>
  </div>
);

MagicalFactor.propTypes = {
  value: propTypes.shape({
    text: propTypes.string.isRequired,
    imgSrc: propTypes.string.isRequired,
  }).isRequired,
  reviewText: propTypes.string.isRequired,
};

export default MagicalFactor;
