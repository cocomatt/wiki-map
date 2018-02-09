"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post("/login", (req, res) => {

    console.log('It works!');
    res.send('index');
  });


  router.get("/:id", (req, res) => {
    res.send('"it works');
  });

  return router;
}
