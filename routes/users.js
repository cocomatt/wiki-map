"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.post('/logout', (req, res) => {

    req.session.user_id = undefined;
    res.redirect('/users');
  });

  router.post('/login', (req, res) => {

	console.log("Login Happened", req.body.email, req.session.user_id);

    knex("users").where(req.body.email, "password")
               .then((userPassword) => {

      if (bcrypt.compareSync(req.body.password, userPassword)) {
        req.session.user_id = users[user].id;
      } else {
        req.session.user_id = null;
      }
    });
    res.redirect('/users');
  });

  router.get("/", (req, res) => {

  	//NEED TO SEND TEMPLATE VARS WITH SESSION AND URL FOR EJS
  	let users = req.session.user_id;
    res.render('users', {users});
  });
  return router;
}
