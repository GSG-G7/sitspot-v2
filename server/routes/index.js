const router = require('express').Router();
const getKeywords = require('./getKeywords');

router.get('/keywords', getKeywords);
module.exports = router;
