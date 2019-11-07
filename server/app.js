const { join } = require('path');
const express = require('express');

const router = require('./router');

const app = express();

app.set('port', process.env.PORT || 5000);

// eslint-disable-next-line import/no-extraneous-dependencies, global-require
if (process.env.NODE_ENV === 'development') app.use(require('morgan')('dev'));

app.use('/api/v1', router);

app.use(express.static(join(__dirname, '..', 'client', 'build')));

app.all('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
});

module.exports = app;
