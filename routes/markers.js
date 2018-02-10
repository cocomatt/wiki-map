"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  // GET all markers
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("markers")
      .where("id", 2)
      .then((results) => {
        res.json(results);
      });
  });

// GET specific marker
  router.get("/:marker_id", (req, res) => {
    if (req.params.marker_id > 0) {
      knex
        .select("*")
        .from("markers")
        .where("id", req.params.marker_id)
        .then((results) => {
          res.json(results);
        });
    }
  });

  return router;

};
