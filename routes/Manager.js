const ENV           = process.env.ENV || 'development';
const knexConfig    = require('./../knexfile');
const knex          = require('knex')(knexConfig[ENV]);
const express 		= require('express');
const router  		= express.Router();

const Manager = (req, res, redirect) => {
  	

  let templateVars = {
    "users": {
      users: req.session.user_id,
      mapID: req.params.map_id,
      url: encodeURIComponent(redirect)
    }
  }


  if(req.body.loginemail !== undefined && req.body.loginpassword !== undefined) {
  req.session.user_id = req.body.loginemail;
 
    knex('users').where({ email: req.body.loginemail })
                 .select('password')
                 .then(function(result) {
        
    if (!result || !result[0])  {
      console.log("USER WAS NOT FOUND")
      req.session.user_id = undefined;
    }
    var pass = result[0].password;
    if (req.body.loginpassword === pass) {
        console.log("USER LOGGED IN")
    } else {
        console.log("USER FAILED PASSWORD")
        req.session.user_id = undefined;

    }
      }).catch(function(error) {
        console.log(error);
    });
  }

  templateVars.users.users = req.session.user_id;
  return templateVars;
};

module.exports.Manager = Manager;