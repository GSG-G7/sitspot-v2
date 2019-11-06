const { selectKeywords } = require('../models/queries');

module.exports = (req, res, next) => {
  selectKeywords().then(data => {
    res.send({
      statusCode: 200,
      data,
    });
  });
};
