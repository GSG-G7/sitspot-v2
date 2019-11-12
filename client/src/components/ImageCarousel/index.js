import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';

import './style.css';

const ImageCarousel = ({
  slides,
  isAuto,
  haveDots,
  dotPosition,
  smallTitle,
}) => (
  <Carousel
    className="slider"
    autoplay={isAuto}
    dots={haveDots}
    dotPosition={dotPosition}
  >
    {slides.map(({ id, src, alt, title }) => (
      <div key={id} className="slider__slide">
        {title && smallTitle && (
          <div className="slider__slide__img-smallTitle-container">
            <img className="slider__slide__picture" src={src} alt={alt} />
            <span className="slider__slide__img-smallTitle-container__tilte">
              {title}
            </span>
          </div>
        )}
        {!smallTitle && (
          <img className="slider__slide__picture" src={src} alt={alt} />
        )}
        {!smallTitle && title && (
          <p className="slider__slide__caption">{title}</p>
        )}
      </div>
    ))}
  </Carousel>
);

ImageCarousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
  haveDots: PropTypes.bool,
  isAuto: PropTypes.bool,
  dotPosition: PropTypes.string,
  smallTitle: PropTypes.bool,
};
ImageCarousel.defaultProps = {
  isAuto: true,
  haveDots: true,
  dotPosition: 'bottom',
  smallTitle: false,
};

export default ImageCarousel;
