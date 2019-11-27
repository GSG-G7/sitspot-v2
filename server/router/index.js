const router = require('express').Router();
const multer = require('multer');
const { middleware: cache } = require('apicache');
const { NOT_FOUND } = require('../controllers/errors/errorMessages');
const {
  routes: {
    place,
    getKeywords,
    placeAndReviews,
    getSitspotCount,
    search,
    randomPlaces,
  },
  error,
} = require('../controllers');

const upload = multer({ limits: { fieldSize: 4.5 * 1024 * 1024 } });

router.get('/search', cache('8 minutes'), search);
router.get('/keywords', getKeywords);
router.get('/randomplaces', randomPlaces);
router.get('/count', cache('8 minutes'), getSitspotCount);

router
  .route('/sitspot')
  .get(cache('8 minutes'), placeAndReviews)
  .post(upload.any(), place.post);

router.all('*', (req, res, next) => {
  next({ statusCode: 404, message: NOT_FOUND });
});
router.use(error);

module.exports = router;
