"use strict";

const express = require('express');
const router  = express.Router();
const session = require('./Manager');

module.exports = (knex) => {

  router.post('/logout', (req, res) => {
    req.session.user_id = undefined;
    let templateVars = session.Manager(req, res, 'maps');
      console.log(res.body);
    res.redirect(`/${templateVars.users.url}`);
  });

  router.post('/login', (req, res) => {
    let templateVars = session.Manager(req, res, 'maps');
      console.log(res.body);
    res.redirect(`/${templateVars.users.url}`);
  });

  router.get("/", (req, res) => {
    let templateVars = session.Manager(req, res, "maps");
      console.log(res.body);
    res.render('index', templateVars);
  });

  router.get('/:map_id', (req, res) => {
    let templateVars = session.Manager(req, res, req.params.map_id);
      console.log(res.body);
    res.render('show_map', templateVars);
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