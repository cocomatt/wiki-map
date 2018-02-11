"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {


  router.post('/logout', (req, res) => {
    req.session.user_id = undefined;
    res.redirect('/');
  });



  router.post('/login', (req, res) => {
    console.log(req.body.email, req.body.password);


    knex('users')
      .where({ email: req.body.email })
      .select('password')
      .then(function(result) {
        if (!result || !result[0])  {  // not found!
          console.log("USER WAS NOT FOUND")
          return;
        }
        var pass = result[0].password;
        if (req.body.password === pass) {
          console.log("USER LOGGED IN")
        } else {
          console.log("USER FAILED PASSWORD")
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  });

    // if ((results[user].email === req.body.email) 
    //   && bcrypt.compareSync(req.body.password, userDatabase[user].password)) {

    // }


  router.get("/", (req, res) => {

      let templateVars = {
        'users': {
          users: req.session.user_id,
          url: encodeURIComponent("users")
        }
      }
      console.log(templateVars);
      res.render('users', templateVars);
  });


  return router;
}
