import React from 'react';
import propTypes from 'prop-types';
import Keywords from '../../assets/Keywords';

import './style.css';

const MagicalFactor = ({ value: { text, src }, reviewText }) => (
  <div className="magical">
    <div className="magical__keyword">
      <div className="magical__keyword__img">
        <img src={Keywords[src]} alt={text} className="magical__keyword__img" />
      </div>
      <div
        className={`magical__keyword__div${text.length > 18 ? ' smaller' : ''}`}
      >
        <p>{text}</p>
      </div>
    </div>
    <div className="magical__review">
      <p className="magical__review__p">{reviewText}</p>
    </div>
  </div>
);

MagicalFactor.propTypes = {
  value: propTypes.shape({
    text: propTypes.string.isRequired,
    src: propTypes.string.isRequired,
  }).isRequired,
  reviewText: propTypes.string.isRequired,
};

export default MagicalFactor;
