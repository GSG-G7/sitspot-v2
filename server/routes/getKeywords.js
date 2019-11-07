const { selectKeywords } = require('../models/queries');

module.exports = (req, res, next) => {
  selectKeywords()
    .then(records => records.map(record => record.get('Name')).filter(e => !!e))
    .then(data => res.json({ data }))
    .catch(err => {
      next(err);
    });
};
