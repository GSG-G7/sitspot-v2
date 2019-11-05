import React from 'react';
import propTypes from 'prop-types';

import { Button, Fab, ImageCarousel } from '../../components/index';
import backIcon from '../../assets/images/left-arrow.svg';
// import plusIcon from '../../assets/images/plus.svg';

import './style.css';

const SinglePlace = ({ name, country, city, website, images, reviews }) => (
  <>
    <div className="Header-div" />
    <div className="buttons-container">
      <span className="buttons-container__back">
        <img syle="flaot: left" alt="back arrow" src={backIcon} />
        <small>Back to results</small>
      </span>
      <Button onClick={() => {}} className="buttons-container__add">
        Add your recommendation
      </Button>
    </div>
    <span className="heading-span">{`${name}, ${country}, ${city}`}</span>
    <span>{website}</span>
    <ImageCarousel slides={images} />
    <span>Recommended by {reviews.length}</span>
    <Fab />
    <hr />
  </>
);

SinglePlace.propTypes = {
  name: propTypes.string.isRequired,
  country: propTypes.string.isRequired,
  city: propTypes.string.isRequired,
  website: propTypes.string.isRequired,
  images: propTypes.arrayOf(String).isRequired,
  reviews: propTypes.arrayOf(Object).isRequired,
};

export default SinglePlace;
