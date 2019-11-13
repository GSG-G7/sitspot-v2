/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import propTypes from 'prop-types';
import { Icon } from 'antd';
import axios from 'axios';

// eslint-disable-next-line no-unused-vars
import { Button, Fab, ImageCarousel, Review } from '../../components/index';
import fakeImages from '../../components/ImageCarousel/fakeData';
import { singleSitSpot, review } from './FakeData';
import backgroundImage from '../../assets/images/back-single.png';

import './style.css';

class SinglePlace extends Component {
  state = {
    name: '',
    country: '',
    city: '',
    url: '',
    images: [],
    reviews: [review],
  };

  componentDidMount() {
    axios.get('/api/v1/place?id=17&type=stay').then(place => {
      console.log(place.data); // object contains place data and array of reviews
      this.setState(place.data);
    });
  }

  render() {
    const { name, country, city, url, images } = this.state;
    const { reviews } = this.state;
    return (
      <>
        <img
          src={backgroundImage}
          alt="background"
          className="single-place__header-img"
        />
        <div className="placename-search-container">
          <div className="buttons-container">
            <Link to="/search">
              <Button className="transparent primary-color">
                <Icon type="arrow-left" /> <span>Back to results</span>
              </Button>
            </Link>
            <Link to="/review">
              <Button onClick={() => {}} className="button  primary-background">
                <Icon type="plus" style={{ color: '#fff' }} />
                <span className="button-text"> Add your recommendation</span>
              </Button>
            </Link>
          </div>
          <p className="place-name-location">
            {`${name}, ${country}, ${city}`}{' '}
          </p>
          <a href={url} className="website-link">
            {url}
          </a>
        </div>
        <div className="single-place__slider">
          <ImageCarousel slides={images} smallTitle />
        </div>
        <span className="recommended-by-text">
          Recommended by {reviews.length} contributors
        </span>
        <hr />
        <Link to="/review">
          <Fab onClick={() => {}} />
        </Link>
        <div className="reviews-container">
          {/* {reviews.map(reviewItem => (
            <Review key={reviewItem.id} review={reviewItem} />
          ))} */}
        </div>
      </>
    );
  }
}

// SinglePlace.propTypes = {
//   name: propTypes.string.isRequired,
//   country: propTypes.string.isRequired,
//   city: propTypes.string.isRequired,
//   website: propTypes.string.isRequired,
//   images: propTypes.arrayOf(propTypes.String).isRequired,
// };

SinglePlace.defaultProps = {
  name: singleSitSpot.name,
  country: singleSitSpot.country,
  city: singleSitSpot.city,
  website: singleSitSpot.website,
  images: fakeImages,
};

export default SinglePlace;
