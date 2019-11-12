const { search } = require('../../models/queries');

module.exports = (req, res, next) =>
  search(req.query)
    .then(result => result.map(({ id, fields }) => ({ id, ...fields })))
    .then(result => res.json(result))
    .catch(next);
