import React, { Component } from 'react';

import { Search, ImageCarousel } from '../../components/index';
import fakeImages from '../../components/ImageCarousel/fakeData';
import plantIcon from '../../assets/images/icon-sign.svg';

import './style.css';

class Home extends Component {
  // eslint-disable-next-line no-unused-vars
  getSitSpots = data => {
    // move to the searchResult route and send search creteria to it
  };

  render() {
    return (
      <>
        <div className="top-container header-container">
          <p className="top-container__slagon ">
            Where conscious travellers find their feel good
          </p>
          <div className="top-container__search">
            <Search getSitSpots={this.getSitSpots} />
          </div>
        </div>
        <div className="second-container">
          <div className="welcome-container ">
            <img alt="plant icon" src={plantIcon} />
            <p className="welcome-container__text">Welcome to our beta site</p>
            <img alt="plant icon" src={plantIcon} />
          </div>
          <p className="value-paragragh">
            We believe that we can change the world together. Join our community
            of like-minded conscious travellers.
            <br />
            <br />
            find and recommend sustainable businesses which deserve kudos.
            We&apos;ll even plant a tree each time we publish a new
            recommendation!
            <br />
            <br />
            Your feedback is essential in shaping the future of SitSpot. We
            can&apos;t wait to hear from you.
          </p>
          <p className="slider-title">Suggested sitspots</p>
          <ImageCarousel
            slides={fakeImages}
            haveDots={false}
            className="slider"
          />
        </div>
      </>
    );
  }
}

export default Home;
