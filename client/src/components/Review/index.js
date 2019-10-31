import React from 'react';
import propTypes from 'prop-types';
import MagicalFactor from '../MagicalFactor';

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
      reviewee: { name },
      title,
      magicalFactors,
      tripDetails,
      reviewText,
      preservation,
    } = this.props;
    const { isProfileShown, expand } = this.state;

    return (
      <div className="review">
        <div className="review__reviewee">
          <p>
            By {`${name} `} |
            <span tabIndex="-1" role="button" onClick={this.toggleProfile}>
              {' '}
              {isProfileShown ? 'Hide' : 'View'} Profile
            </span>
          </p>
        </div>
        {isProfileShown && <div className="review__reviewee-full-info"> </div>}
        <div className="review__heading">
          <h3>{title}</h3>
        </div>
        <div className="review__magical-factors">
          {magicalFactors.map(({ value, reviewText: magicalFactorReview }) => (
            <MagicalFactor
              value={value}
              reviewText={magicalFactorReview}
              key={value.text}
            />
          ))}
        </div>
        <div className="review__details">
          {Object.entries(tripDetails).map((
            [key, value] // extremely debatable way to do this
          ) => (
            <div className="review__details__field" key={key}>
              <p>{key}</p>
              <p>{value}</p>
            </div>
          ))}
        </div>
        <div className="review__body">
          <p className="review__text">
            {expand ? reviewText : reviewText.slice(10)}
            {!expand && (
              <span tabIndex="-1" role="button" onClick={this.toggleExpand}>
                More
              </span>
            )}
          </p>
          {expand && (
            <div className="review__badges">
              {preservation.map(({ title: preservationTitle, badges }) => (
                <div className="review__badges__item" key={title}>
                  <h4>{preservationTitle}</h4>
                  <ul className="review__badges__item__ul">
                    {badges.map(badge => (
                      <li className="review__badges__item__li" key={badge}>
                        {badge}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <span tabIndex="-1" role="button" onClick={this.toggleExpand}>
                Less
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

Review.defaultProps = {
  reviewee: { name: 'Hanaa' },
  title: 'hi',
  magicalFactors: [
    {
      value: { text: 'Family', imgSrc: 'family' },
      reviewText: 'haidslkashdlkahgskjashgkjahskj',
    },
    {
      value: { text: 'Wild', imgSrc: 'wild' },
      reviewText: 'haidslkashdlkahgskjashgkjahskj',
    },
  ],
  tripDetails: {
    type: 'accomdation',
    subtype: 'private ensuite',
    typeOfTrip: 'Backpacking',
    date: '13/9/2018',
    priceRange: 'luxury',
  },
  reviewText:
    'ahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfkahsdhaksjfhkdsjghlkhdalkhdfk',
  preservation: [
    {
      title: 'hi',
      badges: ['asdjlakfsjlksaj', 'sadsadasd'],
    },
  ],
};

const { shape, string, arrayOf } = propTypes;
Review.propTypes = {
  reviewee: shape({
    name: string,
  }),
  title: string,
  magicalFactors: arrayOf(
    shape({
      value: shape({ text: string, imgSrc: string }),
      reviewText: string,
    })
  ),
  tripDetails: shape({
    type: string,
    subtype: string,
    typeOfTrip: string,
    date: string,
    priceRange: string,
  }),
  reviewText: string,
  preservation: arrayOf(
    shape({
      title: string,
      badges: arrayOf(string),
    })
  ),
};

export default Review;
