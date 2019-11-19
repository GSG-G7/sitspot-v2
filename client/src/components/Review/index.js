import React from 'react';
import propTypes from 'prop-types';

import MagicalFactor from '../MagicalFactor';
import ProfileDetails from './subcomponent/ProfileDetails';
import ImageCarousel from '../ImageCarousel';
import './style.css';

class Review extends React.Component {
  state = {
    isProfileShown: false,
    expand: false,
  };

  toggleProfile = () =>
    this.setState(({ isProfileShown }) => ({
      isProfileShown: !isProfileShown,
    }));

  toggleExpand = () =>
    this.setState(({ expand }) => ({
      expand: !expand,
    }));

  render() {
    const {
      review: {
        reviewer,
        reviewDate,
        reviewTitle,
        magicalFactors,
        tripDetails,
        fullReview,
        preservationFactors,
        images: imagesUrls,
      },
    } = this.props;
    const images = imagesUrls.map(e => ({ id: e, src: e }));

    const { isProfileShown, expand } = this.state;

    return (
      <div className="review">
        <p className="review__reviewee">
          By {`${reviewer.Alias} `}
          <span
            className="review__reviewee__view-profile"
            tabIndex="-1"
            role="button"
            onClick={this.toggleProfile}
          >
            | {isProfileShown ? ' Hide' : ' View'} Profile
          </span>
        </p>
        {isProfileShown && (
          <>
            <ProfileDetails
              className="review__reviewee-full-info"
              profile={reviewer}
            />
            <span
              tabIndex="-1"
              role="button"
              onClick={this.toggleProfile}
              className="review__reviewee__view-profile hide-profile"
            >
              Hide Profile
            </span>
          </>
        )}
        <ImageCarousel slides={images} isAuto haveDots dotPosition="bottom" />
        <div className="review__heading green-dotted-border">
          <span className="review__heading__title">{reviewTitle}</span>
          <span className="review__heading__date">{reviewDate}</span>
        </div>
        {magicalFactors.length !== 0 ? (
          <div className="review__magical-factors">
            {magicalFactors.map(({ name, src, followUp }) => (
              <div className="green-dotted-border" key={name}>
                <MagicalFactor name={name} src={src} followUp={followUp} />
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
        <div className="review__details green-dotted-border">
          {Object.entries(tripDetails).map((
            [key, value] // extremely debatable way to do this
          ) => (
            <div className="review__details__field" key={key}>
              <p className="review__details__field__type">{key}</p>
              <p className="review__details__field__value">{value}</p>
            </div>
          ))}
        </div>
        <div className="review__body">
          <p className="review__text">
            {expand ? fullReview : fullReview.slice(0, 200)}
            {!expand && (
              <span
                className="expand-button"
                tabIndex="-1"
                role="button"
                onClick={this.toggleExpand}
              >
                <br />
                More
              </span>
            )}
          </p>
          {expand && (
            <div className="review__badges">
              {preservationFactors.map(({ name, followUp }) => (
                <div className="review__badges__item" key={name}>
                  <h4 className="review__badges__title">{name}</h4>
                  <ul className="review__badges__list">
                    {followUp.map(item => (
                      <li className="review__badges__item__li" key={item}>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {expand && (
            <span
              className="expand-button"
              tabIndex="-1"
              role="button"
              onClick={this.toggleExpand}
            >
              Less
            </span>
          )}
        </div>
      </div>
    );
  }
}

Review.defaultProps = {
  review: {
    reviewer: { Name: 'Hanaa', Country: 'UK', Age: '49-51' },
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
      'ahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhd',
    preservationFactors: [
      {
        title: 'hi',
        badges: ['asdjlakfsjlksaj', 'sadsadasd'],
      },
    ],
  },
};

const { shape, string, arrayOf } = propTypes;
Review.propTypes = {
  review: shape({
    reviewer: shape({
      Name: string,
      Country: string,
      Age: string,
    }),
    title: string,
    magicalFactors: arrayOf(
      shape({
        name: string,
        src: string,
        followUp: string,
      })
    ),
    tripDetails: shape({
      Type: string,
      'Sub Type': string,
      'Type of trip': string,
      Date: string,
      priceRange: string,
    }),
    fullReview: string,
    preservationFactors: arrayOf(
      shape({
        name: string,
        followUp: arrayOf(string),
      })
    ),
  }),
};

export default Review;
