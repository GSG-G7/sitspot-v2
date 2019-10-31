import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

import './style.css';

const ImageCarousel = ({ slides, isAuto, haveDots, dotPosition }) => {
  return (
    <Carousel
      className="slider"
      autoplay={isAuto}
      dots={haveDots}
      dotPosition={dotPosition}
    >
      {slides.map(({ src, alt, title }) => (
        <div className="slider__slide">
          <img
            className="slider__slide__picture"
            key={alt}
            src={src}
            alt={alt}
          />
          {title && <p>{title}</p>}
        </div>
      ))}
    </Carousel>
  );
};

ImageCarousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
  haveDots: PropTypes.bool,
  isAuto: PropTypes.bool,
  dotPosition: PropTypes.string,
};

ImageCarousel.defaultProps = {
  isAuto: true,
  haveDots: true,
  dotPosition: 'bottom',
};

export default ImageCarousel;
