const { typeformBase } = require('../config');

module.exports = ({
  name,
  linkSite: url,
  country,
  city,
  businessType: type,
  img1: image1,
}) =>
  typeformBase('place').create([
    {
      fields: {
        name,
        country,
        city,
        image1,
        url,
        type,
      },
    },
  ]);
