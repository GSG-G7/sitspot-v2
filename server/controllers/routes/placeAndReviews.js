const { getPlace, getPlaceReviews } = require('../../models/queries');
const { imgUrl, formatReviews } = require('../utils');

module.exports = (req, res, next) => {
  const { id, type } = req.query;
  if (!id || !type) {
    next({ statusCode: 400, message: 'id and type required' });
  }

  let placeData = {};

  Promise.all([getPlace(id), getPlaceReviews(type, id)])
    .then(result => {
      const places = result[0];
      const incomingReviews = result[1];

      if (!places || places.length === 0) {
        const error = new Error("place doesn't exists");
        error.statusCode = 404;
        throw error;
      } else {
        const place = { ...places[0].fields };
        const images = [];
        if (place.image1) {
          images.push({
            id: place.image1,
            src: imgUrl(place.image1),
            alt: 'sitSpot',
            title: place.name,
          });
        } else {
          images.push({
            id: 1,
            src:
              'https://res.cloudinary.com/as1789/image/upload/v1574682144/no-image_yb53nt.png',
            alt: 'No img here',
            title: false,
          });
        }

        delete place.image1;
        place.images = images;

        placeData = { ...place, reviews: [] };
      }

      placeData.reviews = incomingReviews
        .map(({ fields }) => fields)
        .map(formatReviews);
    })
    .then(() => res.json(placeData))
    .catch(next);
};
