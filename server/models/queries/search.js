const { typeformBase } = require('../config');

const formulaMaker = ({ country, city, type }) => {
  const formula = [];
  if (country) formula.push(`IF({country} = '${country}',TRUE(),FALSE())`);
  if (city) formula.push(`IF({city} = '${city}',TRUE(),FALSE())`);
  if (type) formula.push(`IF({type} = '${type}',TRUE(),FALSE())`);
  // Not possible to do keywords
  formula.push('{active}');
  return `AND(${formula.join(',')})`;
};

module.exports = ({ country = null, city = null, type = null }) =>
  typeformBase('places')
    .select({
      view: 'Grid view',
      filterByFormula: formulaMaker({ country, city, type }),
    })
    .firstPage();
