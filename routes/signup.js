"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

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


	router.post('/', (req, res) => {


	    if (req.body.email === '' || req.body.password === '') {
	      res.status(400).send('No email or password')
	    } else if (checkEmailExists(req.body.email)) {
	      res.status(400).send('This account already exists')
	    } else {
	      let newUserId = generateRandomString()

		console.log("Signup Happened", UserId);
		
		knex.insert([{id: newUserId, 
					  email: req.body.email, 
					  password: bcrypt.hashSync(req.body.password, 10)}])
		    .into('users');

	      req.session.user_id = newUserId;
	    
	    }

	    res.redirect('/users');
	});


	const checkEmailExists = (email) => {

		console.log("Signup Happened", email);

	  knex("users").where(email, "password")
	               .then((userEmail) => {

	    if (userEmail === email) {
	      return true
	    }
	    return false
	  });
	}


	function generateRandomString () {

		console.log("String Generated");

	  const lengthOfStringGenerated = 6;
	  const charsAllowedInString = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

	  // let userId = false;
	  // while(userId === false) {
		  let randomlyGeneratedString = ''
		  for (let i = lengthOfStringGenerated; i > 0; --i) {
		   	randomlyGeneratedString += charsAllowedInString[Math.floor(Math.random() * charsAllowedInString.length)]
		  }

		  // knex("users").where("id")
		  //              .then((Id) => {

		  //   if(randomlyGeneratedString !== Id) {
		  //   	userId === true;
		  //   }
		 //  });
	  // }

	  return randomlyGeneratedString
	}


  router.get("/", (req, res) => {


  	//NEED TO SEND TEMPLATE VARS WITH SESSION AND URL FOR EJS
  req.session.user_id = undefined;
  let users = req.session.user_id;
  res.render('signup', {users});
  });
  return router;
}