"use strict";

const express = require('express');
const router  = express.Router();
const session = require('./Manager')
const bcrypt  = require('bcrypt')

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
    let templateVars = session.Manager(req, res, "signup");
    res.render('signup', templateVars);
  });



  router.post('/', (req, res) => {

    if (req.body.email === '' || req.body.password === '') {
	      res.status(400).send('No email or password')
    } else {
	  let newUserId = generateRandomString()		
	  // knex.insert([{id: newUserId, 
		 //  email: req.body.email, 
	  //     password: bcrypt.hashSync(req.body.password, 10)}])
		 //  .into('users');
	  req.session.user_id = newUserId; 
	}
	  res.redirect('/users');
  });


  function generateRandomString () {
    const lengthOfStringGenerated = 6
    const charsAllowedInString = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let randomlyGeneratedString = ''
    for (let i = lengthOfStringGenerated; i > 0; --i) {
   	  randomlyGeneratedString += charsAllowedInString[Math.floor(Math.random() * charsAllowedInString.length)]
    }

    return randomlyGeneratedString
  }

  return router;
}