import React from 'react';
import propTypes from 'prop-types';

import image from '../../assets/images/placeimg.png';
import './style.css';

const SearchResult = ({ resultArray }) => (
  <ul className="list">
    {resultArray.map(item => {
      return (
        <li key={item.id} className="list__item">
          <img className="list__item__img" alt="one sitSpot" src={image} />
          <p className="list__item__text">Consect Adip</p>
          <p className="list__item__text">Etiam Dapibus</p>
        </li>
      );
    })}
  </ul>
);

SearchResult.propTypes = {
  resultArray: propTypes.arrayOf(propTypes.object).isRequired,
};

export default SearchResult;
