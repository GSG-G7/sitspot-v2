const { typeformBase } = require('../config');

module.exports = (type, placeId) =>
  typeformBase(type)
    .select({
      view: 'Grid view',
      filterByFormula: `AND(IF({place_id} = '${placeId}',TRUE(),FALSE()),{active})`,
    })
    .firstPage();
