const router = require('express').Router();

const placeAndReviews = require('./placeAndReviews');

router.get('/placereviews', placeAndReviews);

module.exports = router;
