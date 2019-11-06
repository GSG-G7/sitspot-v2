const base = require('../config');

module.exports = () =>
  base('Keywords')
    .select({ view: 'Grid view' })
    .firstPage();
