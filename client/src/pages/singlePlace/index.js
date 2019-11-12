/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { Icon } from 'antd';

import { Button, Fab, ImageCarousel, Review } from '../../components/index';
import fakeImages from '../../components/ImageCarousel/fakeData';
import singleSitSpot from './FakeData';
import backgroundImage from '../../assets/images/back-single.png';

import './style.css';

class SinglePlace extends Component {
  state = {
    reviews: [
      {
        id: 1,
        reviewee: { Name: 'Hanaa', Country: 'UK', Age: '49-51' },
        reviewDate: new Date().toLocaleDateString(),
        title: 'OK THAT WAS Coool as  sa asfas dasdsad',
        magicalFactors: [
          {
            value: { text: 'Solo Traveller Friendly', imgSrc: 'family' },
            reviewText:
              'kasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkj',
          },
          {
            value: { text: 'Wildlife', imgSrc: 'wild' },
            reviewText:
              'kasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkj',
          },
        ],
        tripDetails: {
          Type: 'accomdation',
          'Sub Type': 'private ensuite',
          'Type of trip': 'Backpacking',
          Date: '13/9/2018',
          'Price Range': 'luxury',
        },
        reviewText:
          'ahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfk',
        preservation: [
          {
            title: 'hi',
            badges: ['asdjlakfsjlksaj', 'sadsadasd'],
          },
        ],
      },
      {
        id: 2,
        reviewee: { Name: 'Hanaa', Country: 'UK', Age: '49-51' },
        reviewDate: new Date().toLocaleDateString(),
        title: 'OK THAT WAS Coool as  sa asfas dasdsad',
        magicalFactors: [
          {
            value: { text: 'Solo Traveller Friendly', imgSrc: 'family' },
            reviewText:
              'kasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkj',
          },
          {
            value: { text: 'Wildlife', imgSrc: 'wild' },
            reviewText:
              'kasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkj',
          },
        ],
        tripDetails: {
          Type: 'accomdation',
          'Sub Type': 'private ensuite',
          'Type of trip': 'Backpacking',
          Date: '13/9/2018',
          'Price Range': 'luxury',
        },
        reviewText:
          'ahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfk',
        preservation: [
          {
            title: 'hi',
            badges: ['asdjlakfsjlksaj', 'sadsadasd'],
          },
        ],
      },
      {
        id: 3,
        reviewee: { Name: 'Hanaa', Country: 'UK', Age: '49-51' },
        reviewDate: new Date().toLocaleDateString(),
        title: 'OK THAT WAS Coool as  sa asfas dasdsad',
        magicalFactors: [
          {
            value: { text: 'Solo Traveller Friendly', imgSrc: 'family' },
            reviewText:
              'kasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkj',
          },
          {
            value: { text: 'Wildlife', imgSrc: 'wild' },
            reviewText:
              'kasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkjkasjlksajdlkj',
          },
        ],
        tripDetails: {
          Type: 'accomdation',
          'Sub Type': 'private ensuite',
          'Type of trip': 'Backpacking',
          Date: '13/9/2018',
          'Price Range': 'luxury',
        },
        reviewText:
          'ahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfk',
        preservation: [
          {
            title: 'hi',
            badges: ['asdjlakfsjlksaj', 'sadsadasd'],
          },
        ],
      },
    ],
  };

  render() {
    const { name, country, city, website, images } = this.props;
    const { reviews } = this.state;
    return (
      <>
        <img
          src={backgroundImage}
          alt="background"
          className="single-place__header-img"
        />
        <div className="buttons-container">
          <Link to="/search">
            <span className="buttons-container__back">
              <Icon type="arrow-left" />
              <span className="buttons-container__back__text">
                Back to results
              </span>
            </span>
          </Link>
          <Link to="/review">
            <Button onClick={() => {}} className="buttons-container__add">
              <Icon type="plus" style={{ color: '#fff' }} />
              <span className="buttons-container__add__text">
                Add your recommendation
              </span>
            </Button>
          </Link>
        </div>
        <p className="heading-name-location">
          {`${name}, ${country}, ${city}`}{' '}
        </p>
        <a href={website} className="heading-website">
          {website}
        </a>
        <div className="single-place__slider">
          <ImageCarousel slides={images} smallTitle />
        </div>
        <span className="recommended-by-text">
          Recommended by {reviews.length} contributors
        </span>
        <Link to="/review">
          <Fab onClick={() => {}} />
        </Link>
        <div className="reviews-container">
          {reviews.map(reviewItem => (
            <Review key={reviewItem.id} review={reviewItem} />
          ))}
        </div>
      </>
    );
  }
}

SinglePlace.propTypes = {
  name: propTypes.string.isRequired,
  country: propTypes.string.isRequired,
  city: propTypes.string.isRequired,
  website: propTypes.string.isRequired,
  images: propTypes.arrayOf(propTypes.String).isRequired,
};

SinglePlace.defaultProps = {
  name: singleSitSpot.name,
  country: singleSitSpot.country,
  city: singleSitSpot.city,
  website: singleSitSpot.website,
  images: fakeImages,
};

export default SinglePlace;
