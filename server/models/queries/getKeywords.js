const { staticsBase } = require('../config');

module.exports = () =>
  staticsBase('Keywords')
    .select({ view: 'Grid view' })
    .firstPage();
