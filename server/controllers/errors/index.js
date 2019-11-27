module.exports = (err, req, res, next) => {
  if (process.env.NODE_ENV === 'development')
    // eslint-disable-next-line no-console
    console.log(err);
  const { statusCode, message } = err;
  switch (statusCode) {
    case 400:
    case 401:
    case 404:
      res.status(statusCode).json({ statusCode, message });
      break;
    default:
      res.status(500).json({ message: 'server error', error: err.message });
  }
};
