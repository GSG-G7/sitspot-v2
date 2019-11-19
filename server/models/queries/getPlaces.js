const { typeformBase } = require('../config');

module.exports = () => {
  const countries = [];
  return typeformBase('place')
    .select({
      view: 'Grid view',
      filterByFormula: `AND({active})`,
    })
    .eachPage((records, fetchNext) => {
      records.forEach(({ fields: { country } }) => countries.push(country));
      fetchNext();
    })
    .then(() => countries.filter(e => !!e));
};
