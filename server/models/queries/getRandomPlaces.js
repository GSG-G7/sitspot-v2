const { typeformBase } = require('../config');

module.exports = () =>
  typeformBase('place')
    .select({
      maxRecords: 3,
      view: 'Grid view',
      filterByFormula: `AND(IF({image1} != '',TRUE(),FALSE()),{active})`,
    })
    .firstPage();
