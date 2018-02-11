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

  //--- GET all maps AND MARKER table data ordered by created last and matching markers ---
  router.get("/index_maps", (req, res) => {
    knex('markers')
      .join('maps', 'markers.map_id', '=', 'maps.id')
      .select('*')
      .orderBy('maps.id', 'desc')
      .then((results) => {
        res.json(results);
      });
  });

  //--- GET maps and marker data for specific map ---
  router.get("/data/:map_id", (req, res) => {
    const map = req.params.map_id

    knex('maps')
      .join('markers', 'maps.id', '=', 'markers.map_id')
      .select('*')
      .where('maps.id', `${map}`)
      .orderBy('markers.map_id')
      .then((results) => {
        res.json(results);
      });
  });

  return router;
}




