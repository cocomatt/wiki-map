"use strict";

const express = require('express');
const router  = express.Router();
const session = require('./Manager')

module.exports = (knex) => {

  router.post('/logout', (req, res) => {
    req.session.user_id = undefined;
    let templateVars = session.Manager(req, res, 'users');
    res.redirect(`/${templateVars.users.url}`);
  });

  router.post('/login', (req, res) => {
    let templateVars = session.Manager(req, res, 'users');
    res.redirect(`/${templateVars.users.url}`);
  });

  router.get("/", (req, res) => {
    let templateVars = session.Manager(req, res, "users");
    res.render('users', templateVars);
  });



  return router;

}
