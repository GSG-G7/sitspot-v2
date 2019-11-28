const { object, string } = require('yup');

module.exports = object().shape({
  name: string().required(),
  link: string(),
  country: string().required(),
  city: string().required(),
  type: string().required(),
});
