import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Search, ImageCarousel } from '../../components/index';
import { randomplaces } from '../../services/api';
import plantIcon from '../../assets/images/icon-sign.svg';
import { ImagesContext } from '../../context/ImageContext';

import './style.css';

class Home extends Component {
  state = {
    suggestedSitspots: [],
  };

  componentDidMount() {
    randomplaces().then(({ data }) => {
      this.setState({ suggestedSitspots: data });
    });
  }

  onClickSlide = index => {
    const { suggestedSitspots } = this.state;
    const { id, type } = suggestedSitspots[index];
    const { history } = this.props;
    history.push(`/sitspot/${type}/${id}`);
  };

  render() {
    const { history } = this.props;
    const { suggestedSitspots } = this.state;
    return (
      <div className="home">
        <ImagesContext.Consumer>
          {context => {
            const { image } = context;
            return (
              <div
                className="home__top-container header-container"
                style={{
                  background: `url(${image}) no-repeat center center/cover`,
                }}
              >
                <p className="home__top-container__slagon ">
                  Where conscious travellers find their feel good
                </p>
                <div className="home__top-container__search">
                  <Search onSubmit={state => history.push('/search', state)} />
                </div>
              </div>
            );
          }}
        </ImagesContext.Consumer>
        <div className="home__second-container">
          <div className="home__welcome-container ">
            <img alt="plant icon" src={plantIcon} />
            <p className="home__welcome-container__text">
              Welcome to our beta site
            </p>
            <img alt="plant icon" src={plantIcon} />
          </div>
          <p className="home__value-paragragh">
            We believe that we can change the world together. Join our community
            of like-minded conscious travellers.
          </p>
          <p className="home__value-paragragh">
            Find and recommend sustainable businesses which deserve kudos.
            We&apos;ll even plant a tree each time we publish a new
            recommendation!
          </p>
          <p className="home__value-paragragh">
            Your feedback is essential in shaping the future of SitSpot. We
            can&apos;t wait to hear from you.
          </p>
          <p className="home__slider-title">Suggested sitspots</p>
          <ImageCarousel
            slides={suggestedSitspots}
            haveDots={false}
            className="home__slider"
            onClick={this.onClickSlide}
          />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default Home;
