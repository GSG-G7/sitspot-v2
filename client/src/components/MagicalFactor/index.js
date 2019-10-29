import React from 'react';
import propTypes from 'prop-types';

import Keywords from '../../assets/Keywords';

import './style.css';

const MagicalFactor = ({ value: { text, imgSrc }, reviewText }) => (
  <div className="magical">
    <div className="magical__keyword">
      <div className="magical__keyword__img">
        <img src={Keywords[imgSrc]} alt={text} />
      </div>
      <div
        className={`magical__keyword-label${
          text.length > 18 ? '--smaller' : ''
        }`}
      >
        <p>{text}</p>
      </div>
    </div>
    <div className="magical__review">
      <p>{reviewText}</p>
    </div>
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
