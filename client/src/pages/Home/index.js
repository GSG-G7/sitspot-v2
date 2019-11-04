import React from 'react';
import { Link } from 'react-router-dom';

import { Search, ImageCarousel } from '../../components/index';
import fakeImages from '../../components/ImageCarousel/fakeData';
import plantIcon from '../../assets/images/icon-sign.svg';

import './style.css';

const Home = () => (
  <div>
    <div className="top-container">
      <p className="top-container__slagon ">
        Where conscious travellers find their feel good
      </p>
      <Search />
    </div>
    <div className="second-container">
      <div className="welcome-container ">
        <img alt="plant icon" src={plantIcon} />
        <p className="welcome-container__text">Welcome to our beta site</p>
        <img alt="plant icon" src={plantIcon} />
      </div>
      <p className="value-paragragh">
        We believe that we can change the world together.
        <br />
        Join our community of like-minded conscious travellers.
        <br />
        <br />
        find and recommend sustainable businesses which deserve kudos. We'll
        even plant a tree each time we publish a new recommendation!
        <br />
        <br />
        Your feedback is essential in shaping the future of SitSpot. We can't
        wait to hear from you.
        <br />
        <Link className="aboutus-link" to="/about-us">
          About SitSpot
        </Link>
      </p>
      <p className="slider-title">Suggested sitspots</p>
      <ImageCarousel slides={fakeImages} haveDots={false} />
    </div>
  </div>
);

export default Home;
