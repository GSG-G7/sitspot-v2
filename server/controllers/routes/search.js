const { search } = require('../../models/queries');

module.exports = (req, res) => {
  search().then(console.log);
};
