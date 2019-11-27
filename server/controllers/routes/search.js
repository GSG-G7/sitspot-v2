const { search } = require('../../models/queries');
const { imgUrl } = require('../utils');

module.exports = (req, res, next) => {
  const { country, city, type, keywords } = req.query;

  const query = {
    country: country && country !== 'undefined' ? country : null,
    city: city && city !== 'undefined' ? city : null,
    type: type && type !== 'undefined' ? type.toLowerCase() : null,
    keywords: keywords ? keywords.split(',') : [],
  };

  search(query)
    .then(result => {
      if (!result || result.length === 0)
        throw {
          statusCode: 404,
          message: 'There is no any sitspot matches your search',
        };
      return result.map(({ id, fields: { image1, ...fields } }) => ({
        id,
        image1: image1
          ? imgUrl(image1)
          : 'https://res.cloudinary.com/amoodaa/image/upload/v1574758979/no-image_xz730l.png',
        ...fields,
      }));
    })
    .then(result => res.send(result))
    .catch(next);
};
