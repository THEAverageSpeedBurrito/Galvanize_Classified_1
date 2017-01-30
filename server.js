'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const messages = require('./routes/classifieds');
var allowCrossDomain = function (req, res, next) {
  res.header('Allow-Control-Allow-Origin', '*');
  res.header('Allow-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Allow-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);
app.use('/classifieds', messages);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
