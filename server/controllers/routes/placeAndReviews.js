const { getPlace, getPlaceReviews } = require('../../models/queries');
const { imgUrl, formatReviews } = require('../utils');
const {
  ID_TYPE_REQUIRED,
  PLACE_DOESNT_EXIST,
} = require('../errors/errorMessages');

module.exports = (req, res, next) => {
  const { id, type } = req.query;
  if (!id || !type) {
    throw { statusCode: 400, message: ID_TYPE_REQUIRED };
  }

  let placeData = {};

  Promise.all([getPlace(id), getPlaceReviews(type, id)])
    .then(([place, incomingReviews]) => {
      if (!place || place.length === 0)
        throw { statusCode: 404, message: PLACE_DOESNT_EXIST };
      const placeFields = { ...place[0].fields };
      const images = [];
      if (placeFields.image1) {
        images.push({
          id: placeFields.image1,
          src: imgUrl(placeFields.image1),
          alt: 'sitSpot',
          title: placeFields.name,
        });
      } else {
        images.push({
          id: 1,
          src:
            'https://res.cloudinary.com/amoodaa/image/upload/v1574758979/no-image_xz730l.png',
          alt: 'No img here',
          title: false,
        });
      }

      delete placeFields.image1;
      placeFields.images = images;

      placeData = { ...placeFields, reviews: [] };
      placeData.reviews = incomingReviews
        .map(({ fields }) => fields)
        .map(formatReviews);
    })
    .then(() => res.json(placeData))
    .catch(next);
};
