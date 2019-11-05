import React from 'react';
import propTypes from 'prop-types';

import './style.css';

const SearchResult = ({ resultArray }) => (
  <div className="search-result">
    <ul className="search-result-list">
      {resultArray.map(({ id, image: { src, alt }, description }) => (
        <li key={`searchRes:${id}`} className="search-result__item">
          <img className="search-result__item-img" alt={alt} src={src} />
          <p className="search-result__item-text">{description}</p>
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
