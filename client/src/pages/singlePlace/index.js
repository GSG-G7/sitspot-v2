import React, { Component } from 'react';
import propTypes from 'prop-types';

import { Button, Fab, ImageCarousel } from '../../components/index';
import backIcon from '../../assets/images/left-arrow.svg';
import fakeImages from '../../components/ImageCarousel/fakeData';
// import plusIcon from '../../assets/images/plus.svg';
import backgroundImage from '../../assets/images/background-single-page.jpg';

import './style.css';

class SinglePlace extends Component {
  state = {
    reviews: [],
  };

  render() {
    const { name, country, city, website, images } = this.props;
    const { reviews } = this.state;
    return (
      <>
        <img
          src={backgroundImage}
          alt="background"
          className="singlePlace-header-img"
        />
        <div className="buttons-container">
          <span className="buttons-container__back">
            <small>Back to results</small>
          </span>
          <Button onClick={() => {}} className="buttons-container__add">
            Add your recommendation
          </Button>
        </div>
        <span className="heading-span">{`${name}, ${country}, ${city}`}</span>
        <span>{website}</span>
        <ImageCarousel slides={fakeImages} />
        <span>Recommended by {reviews.length}</span>
        <Fab />
        <hr />
      </>
    );
  }
}

SinglePlace.propTypes = {
  name: propTypes.string.isRequired,
  country: propTypes.string.isRequired,
  city: propTypes.string.isRequired,
  website: propTypes.string.isRequired,
  images: propTypes.arrayOf(String).isRequired,
};

export default SinglePlace;
