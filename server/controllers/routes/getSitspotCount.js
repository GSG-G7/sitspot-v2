const { getPlaces } = require('../../models');

const countCountries = countries =>
  countries.reduce((accum, cur) => {
    const value = accum[cur] === undefined ? 1 : accum[cur] + 1;
    console.log(cur, value);
    return { ...accum, [cur]: value };
  }, {});

module.exports = (req, res, next) =>
  getPlaces()
    .then(countries => countCountries(countries))
    .then(count => res.json(count));
