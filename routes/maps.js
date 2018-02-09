"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post("/login", (req, res) => {

    console.log('It works!');
    res.send('index');
  });


  router.get("/", (req, res) => {

    const knexQuery = knex('markers')
      .select('*')
      .then((markers) => {
        return
      })

    knexQuery.asCallback((error, results) => {

    res.render('index', {results});
    });
  });

  return router;
}




