import React from 'react';
import propTypes from 'prop-types';

import sitspotImg from '../../assets/searchResult';
import './style.css';

const SearchResult = ({ resultArray }) => {
  let counter = 1;
  return (
    <ul className="list">
      {resultArray.map(item => {
        // this class to avoid margin in the third img in every row
        let classNames = '';
        if (counter === 3) {
          counter = 1;
          classNames = 'list__item list__item__last__row';
        } else {
          classNames = 'list__item';
          counter += 1;
        }

        return (
          <li key={item.id} className={classNames}>
            <img
              className="list__item__img"
              alt="one sitSpot"
              src={sitspotImg[item.imgSrc]}
            />
            <p className="list__item__text">{item.address}</p>
          </li>
        );
      })}
    </ul>
  );
};

SearchResult.propTypes = {
  resultArray: propTypes.arrayOf(propTypes.object).isRequired,
};

export default SearchResult;
