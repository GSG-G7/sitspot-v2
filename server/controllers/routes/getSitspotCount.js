const { getPlaces } = require('../../models');

const countCountries = countries =>
  countries.reduce(
    (accum, cur) => ({
      ...accum,
      [cur]: accum[cur] === undefined ? 1 : accum[cur] + 1,
    }),
    {}
  );

module.exports = (req, res, next) =>
  getPlaces()
    .then(countries => countCountries(countries))
    .then(count => res.json(count));
