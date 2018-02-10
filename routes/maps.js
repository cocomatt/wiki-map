"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get(`/`, (req, res) => {

    let users = "jesse";

    res.render('index', {users});
  });
  return router;
}