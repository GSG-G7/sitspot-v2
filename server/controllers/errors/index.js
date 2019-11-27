const { SERVER_ERROE, TIMEOUT_ERROR } = require('../errors/errorMessages');

module.exports = (err, req, res, next) => {
  if (process.env.NODE_ENV === 'development')
    // eslint-disable-next-line no-console
    console.log(err);
  const { statusCode, message } = err;
  switch (statusCode) {
    case 400:
    case 401:
    case 404:
    case 422:
      res.status(statusCode).json({ statusCode, message });
      break;
    case 503:
      res.status(503).json({
        statusCode: 503,
        message: TIMEOUT_ERROR,
      });
      break;
    default:
      res.status(500).json({ message: SERVER_ERROE, error: err.message });
  }
};
