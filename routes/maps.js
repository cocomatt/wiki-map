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

//THIS NEEDS TO RETURN JASON WITH INFO FROM BOTH
//GET all maps AND MARKER table data ordered by created last and matching markers
  router.get("/index_maps", (req, res) => {
    knex('maps')
      .select('*')
      .orderBy('id', 'desc')
      .then((maps) => {
        res.json(maps);
      });
  });


  router.get("/:map_id", (req, res) => {
    //TODO

    res.render('show_map');
  });

  return router;
}




