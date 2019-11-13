import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { Icon } from 'antd';
import { place as getPlaceReviews } from '../../services/api';
import { Button, Fab, ImageCarousel, Review } from '../../components/index';
import backgroundImage from '../../assets/images/back-single.png';

import './style.css';

class SinglePlace extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { type, sitspotId } = this.props;
    getPlaceReviews(type, sitspotId).then(({ data: { reviews, ...rest } }) => {
      this.setState({ reviews, ...rest });
    });
  }

  render() {
    const {
      type,
      sitspotId,
      sitspot: { name, country, city, url, image1, image2 },
      history,
    } = this.props;
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
            <Button
              className="transparent primary-color"
              onClick={() => history.goBack()}
            >
              <Icon type="arrow-left" /> <span>Back to results</span>
            </Button>
            <Button
              onClick={() => {
                history.push(`/add-review/${type}/${sitspotId}`);
              }}
              className="button  primary-background"
            >
              <Icon type="plus" style={{ color: '#fff' }} />
              <span className="button-text"> Add your recommendation</span>
            </Button>
          </div>
          <p className="place-name-location">
            {`${name}, ${country}, ${city}`}{' '}
          </p>
          <a href={url} className="website-link">
            {url}
          </a>
        </div>
        <div className="single-place__slider">
          <ImageCarousel
            slides={[{ id: image1, src: image1 }, { id: image2, src: image2 }]}
            smallTitle
          />
        </div>
        <span className="recommended-by-text">
          Recommended by {reviews.length} contributors
        </span>
        <hr />
        <Link to="/review">
          <Fab onClick={() => {}} />
        </Link>
        <div className="reviews-container">
          {reviews.map(review => (
            <Review key={review.id} review={review} />
          ))}
        </div>
      </>
    );
  }
}

SinglePlace.propTypes = {
  sitspotId: propTypes.string.isRequired,
  type: propTypes.oneOf(['eat', 'stay', 'shop']).isRequired,
  sitspot: propTypes.shape({
    name: propTypes.string,
    country: propTypes.string,
    city: propTypes.string,
    url: propTypes.string,
    image1: propTypes.string,
    image2: propTypes.string,
  }),
  history: propTypes.shape({
    goBack: propTypes.func.isRequired,
    push: propTypes.func.isRequired,
  }).isRequired,
};

SinglePlace.defaultProps = {
  sitspot: {
    name: 'you are probably seeing a placeholder',
    country: 'SitSpot country',
    city: 'SitSpot city',
    website: 'SitSpot url',
    images: [
      {
        id: 1,
        src:
          'https://res.cloudinary.com/amoodaa/image/upload/v1573596346/etiutpg8xqmt8lertkhb.png',
      },
    ],
  },
};

export default SinglePlace;
