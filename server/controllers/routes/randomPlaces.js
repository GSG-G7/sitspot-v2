const { getRandomPlaces } = require('../../models/queries/index');
const { imgUrl } = require('../utils');

module.exports = (req, res, next) => {
  let placesInfo = [];
  getRandomPlaces()
    .then(places => {
      if (!places || places.length === 0) {
        const error = new Error('There are no places to view!');
        error.statusCode = 404;
        throw error;
      } else {
        placesInfo = places.map(({ fields }) => ({
          id: fields.id,
          src: imgUrl(fields.image1),
          alt: 'sitspot',
          title: fields.name,
          type: fields.type,
        }));
        res.json(placesInfo);
      }
    })
    .catch(next);
};
