import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Icon } from 'antd';

import { place as getPlaceReviews } from '../../services/api';
import { Button, Fab, ImageCarousel, Review } from '../../components/index';
import { ImagesContext } from '../../context/ImageContext';

import './style.css';

class SinglePlace extends Component {
  state = {
    sitspot: {
      name: null,
      country: null,
      city: null,
      url: null,
      images: null,
      reviews: null,
    },
    loading: true,
  };

  componentDidMount() {
    const { type, sitspotId } = this.props;
    const { sitspot } = this.state;
    getPlaceReviews(type, sitspotId).then(({ data: newSitspot }) => {
      this.setState({ sitspot: { ...sitspot, ...newSitspot }, loading: false });
    });
  }

  render() {
    const { type, sitspotId, history } = this.props;
    const {
      sitspot: { name, country, city, url, images, reviews },
      loading,
    } = this.state;

    return (
      <>
        <ImagesContext.Consumer>
          {context => {
            const { image } = context;
            return (
              <div
                className="single-place__header-img"
                style={{
                  background: `url(${image}) no-repeat center bottom/cover`,
                }}
              />
            );
          }}
        </ImagesContext.Consumer>
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
          {name && (
            <p className="place-name-location">
              {`${name}, ${city}, ${country}`}{' '}
            </p>
          )}
          {url && (
            <a
              href={url}
              className="website-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              {url}
            </a>
          )}
        </div>
        {loading ? (
          <div className="spin-box">
            <Icon type="loading" style={{ fontSize: 100 }} spin />
          </div>
        ) : (
          <>
            <div className="single-place__slider">
              {!images[0].title ? (
                <ImageCarousel slides={images} />
              ) : (
                <ImageCarousel slides={images} smallTitle />
              )}
            </div>
            <span className="recommended-by-text">
              Recommended by {reviews.length} contributors
            </span>
            <div className="reviews-container">
              {reviews.map(({ reviewId, ...review }) => (
                <Review key={reviewId} review={review} />
              ))}
            </div>
          </>
        )}

        <Fab
          onClick={() => {
            history.push(`/add-review/${type}/${sitspotId}`);
          }}
        />
      </>
    );
  }
}

SinglePlace.propTypes = {
  sitspotId: propTypes.string.isRequired,
  type: propTypes.oneOf(['eat', 'stay', 'shop']).isRequired,
  history: propTypes.shape({
    goBack: propTypes.func.isRequired,
    push: propTypes.func.isRequired,
  }).isRequired,
};

export default SinglePlace;
