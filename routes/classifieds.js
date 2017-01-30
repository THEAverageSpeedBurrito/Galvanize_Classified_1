
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

router.get('/:id', (req, res) => {
  knex('classifieds')
  .where('id', req.params.id)
  .then((data) => {
    delete data[0].created_at;
    delete data[0].updated_at;
    res.send(data[0]);
  })
})

module.exports = router;
