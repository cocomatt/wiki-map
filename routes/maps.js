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


  router.get("/:map_id", (req, res) => {
    //TODO

    res.render('show_map');
  });

>>>>>>> 83189b59ab046d48bf4d8f388fe00e2a7f2df5ae
  return router;
}