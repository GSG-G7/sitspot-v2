const { SERVER_ERROR, TIMEOUT_ERROR } = require('../errors/errorMessages');

module.exports = (err, req, res, next) => {
  // eslint-disable-next-line no-console
  if (process.env.NODE_ENV === 'development') console.log(err);
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
      res.status(500).json({ message: SERVER_ERROR, error: err.message });
  }
};
