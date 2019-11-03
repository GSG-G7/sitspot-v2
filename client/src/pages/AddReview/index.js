import React from 'react';
import propTypes from 'prop-types';
// https://www.npmjs.com/package/react-typeform-embed
import { ReactTypeformEmbed } from 'react-typeform-embed';

import urls from './urls';

import './style.css';

const AddReview = ({ type, sitspotId }) => (
  <div>
    <div
      className="header-img"
      style={{
        'background-image': '',
      }}
    />
    <ReactTypeformEmbed
      url={urls[type](sitspotId)}
      style={{
        position: 'relative',
        width: '100%',
        height: '90vh',
      }}
    />
  </div>
);
AddReview.propTypes = {
  type: propTypes.oneOf(['STAY', 'EAT', 'SHOP']).isRequired,
  sitspotId: propTypes.string.isRequired,
};

export default AddReview;
