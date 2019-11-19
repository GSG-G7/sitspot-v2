const addPlace = require('./addPlace');
const selectKeywords = require('./getKeywords');
const search = require('./search');
const getPlace = require('./getPlace');
const getPlaceReviews = require('./getPlaceReviews');
const getPlaces = require('./getPlaces');

module.exports = {
  getPlace,
  getPlaces,
  getPlaceReviews,
  selectKeywords,
  search,
  addPlace,
};
