const router = require('express').Router();
const {
  routes: { search },
} = require('../controllers');

router.get('/search', search);

module.exports = router;
