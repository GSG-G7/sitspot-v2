const { typeformBase } = require('../config');

const formulaMaker = ({ country, city, type, keywords }) => {
  const formula = [];
  if (country) formula.push(`IF({country} = '${country}',TRUE(),FALSE())`);
  if (city) formula.push(`IF({city} = '${city}',TRUE(),FALSE())`);
  if (type) formula.push(`IF({type} = '${type}',TRUE(),FALSE())`);
  keywords.forEach(e => formula.push(`{${e}}`));
  formula.push('{active}');
  return `AND(${formula.join(',')})`;
};

module.exports = ({ country = null, city = null, type = null, keywords }) =>
  typeformBase('place')
    .select({
      view: 'Grid view',
      filterByFormula: formulaMaker({ country, city, type, keywords }),
    })
    .firstPage();
