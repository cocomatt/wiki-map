"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get(`/`, (req, res) => {

<<<<<<< HEAD
    let users = "jesse";

    res.render('index', {users});
  });
=======
    console.log('It works!');
    res.render('index');
  });

  router.get("/", (req, res) => {
    res.render('index');
  });

  //--- GET all MAPS AND MARKER table data ordered by created last and matching markers ---
  router.get("/data/index_maps", (req, res) => {
    knex('markers')
      .join('maps', 'markers.map_id', '=', 'maps.id')
      .select('*')
      .orderBy('maps.id', 'desc')
      .then((results) => {
        res.json(results);
      });
  });
  //------------------------------------------------------------------------

  //--- renders a specific map's show page ---
  router.get('/:map_id', (req, res) => {
    let templateVars = {
      mapID: req.params.map_id,
    };

    res.render('show_map', templateVars);
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

>>>>>>> 83189b59ab046d48bf4d8f388fe00e2a7f2df5ae
  return router;
}