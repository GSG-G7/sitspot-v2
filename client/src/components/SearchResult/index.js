import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.css';

const SearchResult = ({ resultArray }) => (
  <div className="search-result">
    <ul className="search-result-list">
      {resultArray.map(({ id, image1, country, type }) => (
        <li key={`searchRes:${id}`} className="search-result__item">
          <Link className="search-result--link" to={`/sitspot/${type}/${id}`}>
            <img className="search-result__item-img" alt="place" src={image1} />
            <p className="search-result__item-text">{`${type}, ${country}`}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

SearchResult.propTypes = {
  resultArray: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      image1: propTypes.string,
      description: propTypes.string,
      country: propTypes.string,
    })
  ).isRequired,
};

export default SearchResult;
