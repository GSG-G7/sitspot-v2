import React from 'react';
import propTypes from 'prop-types';

import MagicalFactor from '../MagicalFactor';
import ProfileDetails from './subcomponent/ProfileDetails';

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
        reviewee,
        reviewDate,
        title,
        magicalFactors,
        tripDetails,
        reviewText,
        preservation,
      },
    } = this.props;
    const { isProfileShown, expand } = this.state;

    return (
      <div className="review">
        <p className="review__reviewee">
          By {`${reviewee.Name} `}
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
              profile={reviewee}
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
        <div className="review__heading green-dotted-border">
          <p className="review__heading__title">{title} </p>
          <p className="review__heading__date">{reviewDate}</p>
        </div>
        <div className="review__magical-factors">
          {magicalFactors.map(({ value, reviewText: magicalFactorReview }) => (
            <div className="green-dotted-border" key={value.text}>
              <MagicalFactor value={value} reviewText={magicalFactorReview} />
            </div>
          ))}
        </div>
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
            {expand ? reviewText : reviewText.slice(0, 200)}
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
              {preservation.map(({ title: preservationTitle, badges }) => (
                <div className="review__badges__item" key={title}>
                  <h4 className="review__badges__title">{preservationTitle}</h4>
                  <ul className="review__badges__list">
                    {badges.map(badge => (
                      <li className="review__badges__item__li" key={badge}>
                        <span>{badge}</span>
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
};

const { shape, string, arrayOf } = propTypes;
Review.propTypes = {
  review: shape({
    reviewee: shape({
      Name: string,
      Country: string,
      Age: string,
    }),
    title: string,
    magicalFactors: arrayOf(
      shape({
        value: shape({ text: string, imgSrc: string }),
        reviewText: string,
      })
    ),
    tripDetails: shape({
      Type: string,
      'Sub Type': string,
      'Type of trip': string,
      Date: string,
      priceRange: string,
    }),
    reviewText: string,
    preservation: arrayOf(
      shape({
        title: string,
        badges: arrayOf(string),
      })
    ),
  }),
};

export default Review;
