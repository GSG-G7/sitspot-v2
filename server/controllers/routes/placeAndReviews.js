const { getPlace, getPlaceReviews } = require('../../models/queries');
const { imgUrl, formatReviews } = require('../utils');

module.exports = (req, res, next) => {
  const { id, type } = req.query;
  if (!id || !type) {
    res.send({ statusCode: 400, message: 'id and type required' });
  }

  let placeData = {};

  Promise.all([getPlace(id), getPlaceReviews(type, id)])
    .then(([places, incomingReviews]) => {
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
              'https://res.cloudinary.com/amoodaa/image/upload/v1574758979/no-image_xz730l.png',
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
