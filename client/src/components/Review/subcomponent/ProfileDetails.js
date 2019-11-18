import React from 'react';
import propTypes from 'prop-types';

const ProfileDetails = ({ profile }) => (
  <div className="profile-details">
    {Object.entries(profile).map(([key, value]) => (
      <div key={key} className="profile-details__item">
        <div className="profile-details__key">{key}</div>
        <div className="profile-details__value">{value}</div>
      </div>
    ))}
  </div>
);
ProfileDetails.propTypes = {
  profile: propTypes.shape({
    Name: propTypes.string,
    Country: propTypes.string,
    Age: propTypes.string,
  }).isRequired,
};
export default ProfileDetails;
