const { typeformBase } = require('../config');

module.exports = placeId =>
  typeformBase('place')
    .select({
      view: 'Grid view',
      filterByFormula: `AND(IF({id} = '${placeId}',TRUE(),FALSE()),{active})`,
    })
    .firstPage();
