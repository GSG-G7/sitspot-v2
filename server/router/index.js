const router = require('express').Router();
const multer = require('multer');
const {
  routes: { place, getKeywords, placeAndReviews, getSitspotCount, search },
  error,
} = require('../controllers/');

const upload = multer({ limits: { fieldSize: 4.5 * 1024 * 1024 } });

router.get('/search', search);
router.get('/keywords', getKeywords);
router.get('/count', getSitspotCount);

router
  .route('/sitspot')
  .get(placeAndReviews)
  .post(upload.any(), place.post);

router.use(error);

module.exports = router;
