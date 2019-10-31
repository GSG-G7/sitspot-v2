import React from 'react';
import propTypes from 'prop-types';

const ProfileDetails = ({ profile }) =>
  Object.entries(profile).map(([key, value]) => (
    <div key={key}>
      {key}: {value}
    </div>
  ));

ProfileDetails.propTypes = {
  reviewee: propTypes.shape({
    name: propTypes.string.isRequired,
  }).isRequired,
};
export default ProfileDetails;
