import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';

const ImageCarousel = ({ slides }) => {
  return (
    <Carousel autoplay>
      {slides.map(({ src, alt }) => (
        <div key={src}>
          <img src={src} alt={alt} />
        </div>
      ))}
    </Carousel>
  );
};

ImageCarousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageCarousel;
