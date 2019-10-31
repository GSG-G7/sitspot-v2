import React from 'react';
import propTypes from 'prop-types';

import ImageRepository from '../../assets';
import './style.css';

const SearchResult = ({ resultArray }) => (
  <div className="search-result">
    <ul className="search-result-list">
      {resultArray.map(({ id, type, address }) => (
        <li key={id} className="search-result__item">
          <img
            className="search-result__item-img"
            alt="one sitSpot"
            src={ImageRepository[type]}
          />
          <p className="search-result__item-text">{address}</p>
        </li>
      ))}
    </ul>
  </div>
);

SearchResult.propTypes = {
  resultArray: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      type: propTypes.string,
      address: propTypes.string,
    })
  ).isRequired,
};

export default SearchResult;
