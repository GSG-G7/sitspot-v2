const { getPlace, getPlaceReviews } = require('../models/queries/');

module.exports = (req, res, next) => {
  const { id, type } = req.query;
  if (!id || !type) {
    res.status(400).json({
      message: 'place id and type required',
    });
  }
  let placeData;

  getPlace(id)
    .then(places => {
      if (!places) throw new Error("place doesn't exists");
      placeData = [places[0].fields, []];
      return placeData[0];
    })
    .then(() => getPlaceReviews(type, id))
    .then(reviews => {
      reviews.forEach(record => {
        placeData[1].push(record.fields);
      });
      res.status(200).json({ placeData });
    })
    .catch(err => {
      if (err.message === "place doesn't exists") {
        res.status(410).json({
          message: err.message,
        });
      }
    });
};
