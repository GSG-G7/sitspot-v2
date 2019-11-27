const { getPlaces } = require('../../models');
const { NO_COUNTRIES_COUNT } = require('../errors/errorMessages');

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
    .then(countries => {
      if (!countries || countries.length === 0)
        throw { statusCode: 404, message: NO_COUNTRIES_COUNT };
      return countCountries(countries);
    })
    .then(count => res.json(count));
