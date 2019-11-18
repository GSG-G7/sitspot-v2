const { search } = require('../../models/queries');
const { imgUrl } = require('../utils');

module.exports = (req, res, next) => {
  const { country, city, lookingFor, keywords } = req.query;
  const query = {
    country: country === 'undefined' ? null : country,
    city: city === 'undefined' ? null : city,
    type: lookingFor === 'undefined' ? null : lookingFor,
    keywords: keywords.split(','),
  };
  search(query)
    .then(result =>
      result.map(({ id, fields: { image1, image2, ...fields } }) => ({
        id,
        image1: imgUrl(image1),
        image2: image2 && imgUrl(image2),
        ...fields,
      }))
    )
    .then(result => res.json(result))
    .catch(next);
};
