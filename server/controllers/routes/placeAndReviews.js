const { getPlace, getPlaceReviews } = require('../../models/queries');

module.exports = (req, res, next) => {
  const { id, type } = req.query;

  if (!id || !type) {
    next({ statusCode: 400, message: 'id and type required' });
  }

  let placeData;

  getPlace(id)
    .then(places => {
      if (!places || places.length === 0) {
        const error = new Error("place doesn't exists");
        error.statusCode = 404;
        throw error;
      } else placeData = { place: { ...places[0].fields }, reviews: [] };
    })
    .then(() => getPlaceReviews(type, id))
    .then(incomingReviews => {
      const { reviews } = placeData;
      incomingReviews.forEach(record => {
        reviews.push(record.fields);
      });
      res.json(placeData);
    })
    .catch(next);
};
