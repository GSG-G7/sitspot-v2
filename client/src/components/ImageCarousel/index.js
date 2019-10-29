import React from 'react';
import propTypes, { node } from 'prop-types';
import { Carousel } from 'antd';

const ImageCarousel = ({ slides }) => {
  return <Carousel autoplay>{slides}</Carousel>;
};

ImageCarousel.propTypes = {
  slides: propTypes.arrayOf(node).isRequired,
};

export default ImageCarousel;
