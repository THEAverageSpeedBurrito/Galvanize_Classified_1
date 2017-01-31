'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const messages = require('./routes/classifieds');
const cors = require('cors');

app.use(cors());
app.use('/classifieds', messages);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
