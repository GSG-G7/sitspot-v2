const router = require('express').Router();

const {
  routes: { placeAndReviews, getKeywords },
  error,
} = require('../controllers');

router.get('/placereviews', placeAndReviews);
router.get('/keywords', getKeywords);
router.use(error);

module.exports = router;
