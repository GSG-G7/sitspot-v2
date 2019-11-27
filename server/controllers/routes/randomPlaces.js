const { getRandomPlaces } = require('../../models/queries/index');
const { imgUrl } = require('../utils');
const { NO_PLACES } = require('../errors/errorMessages');

module.exports = (req, res, next) => {
  getRandomPlaces()
    .then(places => {
      if (!places || places.length === 0)
        throw { statusCode: 404, message: NO_PLACES };
      return places.map(({ fields }) => ({
        id: fields.id,
        src: imgUrl(fields.image1),
        alt: 'sitspot',
        title: fields.name,
        type: fields.type,
      }));
    })
    .then(places => res.json(places))
    .catch(next);
};
