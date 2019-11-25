import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

import images from './images';

export const ImagesContext = createContext();

class ImagesContextProvider extends Component {
  state = {
    image: images[Math.floor(Math.random() * 5)],
  };

  render() {
    const { children } = this.props;
    return (
      <ImagesContext.Provider value={{ ...this.state }}>
        {children}
      </ImagesContext.Provider>
    );
  }
}

ImagesContextProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImagesContextProvider;
