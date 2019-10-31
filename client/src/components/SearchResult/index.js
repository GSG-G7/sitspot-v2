import React from 'react';
import propTypes from 'prop-types';

import ImageRepository from '../../assets';
import './style.css';

const SearchResult = ({ resultArray }) => (
  <div className="search-result">
    <ul className="search-result-list">
      {resultArray.map(item => (
        <li key={item.id} className="search-result__item">
          <img
            className="search-result__item-img"
            alt="one sitSpot"
            src={ImageRepository[item.type]}
          />
          <p className="search-result__item-text">{item.address}</p>
        </li>
      ))}
    </ul>
  </div>
);

SearchResult.propTypes = {
  resultArray: propTypes.arrayOf(propTypes.object).isRequired,
};

export default SearchResult;
