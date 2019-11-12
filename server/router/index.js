const router = require('express').Router();

const {
  routes: { placeAndReviews },
  error,
} = require('../controllers');

router.get('/placereviews', placeAndReviews);
router.use(error);
module.exports = router;
