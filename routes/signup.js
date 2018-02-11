"use strict";

const express = require('express');
const router  = express.Router();
const bcrypt  = require('bcrypt');

module.exports = (knex) => {


	router.post('/', (req, res) => {


	    if (req.body.email === '' || req.body.password === '') {
	      res.status(400).send('No email or password')
	    } else if (checkEmailExists(req.body.email)) {
	      res.status(400).send('This account already exists')
	    } else {
	      let newUserId = generateRandomString()

		console.log("Signup Happened", newUserId);
		
		//INSERT NEW USER ONTO SERVER
		knex.insert([{id: newUserId, 
					  email: req.body.email, 
					  password: bcrypt.hashSync(req.body.password, 10)}])
		    .into('users');

	      req.session.user_id = newUserId;
	    
	    }

	    res.redirect('/users');
	});


  router.get("/", (req, res) => {


  	//NEED TO SEND TEMPLATE VARS WITH SESSION AND URL FOR EJS
  req.session.user_id = undefined;
  let users = req.session.user_id;
  res.render('signup', {users});
  });
  return router;
}