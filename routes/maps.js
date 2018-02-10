"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post("/login", (req, res) => {

    console.log('It works!');
    res.render('index');
  });

  router.get("/", (req, res) => {
    res.render('index');
  });


  router.get("/:map_id", (req, res) => {
    //TODO

    res.render('show_map');
  });

  return router;
}




