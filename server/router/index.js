const router = require('express').Router();

const {
  routes: { getKeywords },
} = require('../controllers');

router.get('/keywords', getKeywords);

module.exports = router;
