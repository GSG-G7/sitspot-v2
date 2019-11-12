const router = require('express').Router();
const multer = require('multer');
const {
  routes: { place, getKeywords },
} = require('../controllers/');

const upload = multer({ limits: { fieldSize: 4.5 * 1024 * 1024 } });

router.post('/place', upload.any(), place.post);

router.get('/keywords', getKeywords);

router.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(err);
  res.status(500).send('sorry, Internal Server Error');
});
module.exports = router;
