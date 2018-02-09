"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post("/login", (req, res) => {

    console.log('It works!');
    res.send('index');
  });


  router.get("/", (req, res) => {
    knex
      .select('*')
      .from ('markers')
      .then((results) => {
        //console.log('results:', results);
        //res.json(results);
        res.render('index', results);
        console.log(results);
      })
  });

  return router;
}




