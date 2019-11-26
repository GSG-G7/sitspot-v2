const { search } = require('../../models/queries');
const { imgUrl } = require('../utils');

module.exports = (req, res, next) => {
  const { country, city, lookingFor, keywords } = req.query;
  const query = {
    country: country === 'undefined' ? null : country,
    city: city === 'undefined' ? null : city,
    type: lookingFor === 'undefined' ? null : lookingFor.toLowerCase(),
    keywords: keywords !== '' ? keywords.split(',') : [],
  };

  search(query)
    .then(result =>
      result.map(({ id, fields: { image1, ...fields } }) => ({
        id,
        image1: image1
          ? imgUrl(image1)
          : 'https://res.cloudinary.com/amoodaa/image/upload/v1574758979/no-image_xz730l.png',
        ...fields,
      }))
    )
    .then(result => res.json(result))
    .catch(next);
};
