
'use strict';

const express = require('express');
const knex = require('../knex');

const router = express.Router();

router.get('/', (req, res) => {
  knex('classifieds')
  .orderBy('id')
  .then((data) => {
    data.forEach((obj) => {
      delete obj.created_at;
      delete obj.updated_at;
    })
    res.send(data);
  });
});

module.exports = router;
