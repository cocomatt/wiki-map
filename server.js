"use strict";

require('dotenv').config();

const PORT          = process.env.PORT || 8080;
const ENV           = process.env.ENV || 'development';
const express       = require('express');
const bodyParser    = require('body-parser');
const sass          = require('node-sass-middleware');
const app           = express();

const knexConfig    = require('./knexfile');
const knex          = require('knex')(knexConfig[ENV]);
const morgan        = require('morgan');
const knexLogger    = require('knex-logger');
const cookieSession = require('cookie-session')
//const bcrypt        = require('bcrypt')

app.use(cookieSession({
  name: 'session',
  keys: ['user_id']
}))

// Seperated Routes for each Resource
const usersRoutes = require('./routes/users');
const mapsRoutes = require('./routes/maps');
const markersRoutes = require('./routes/markers')


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/styles', sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/users", usersRoutes(knex));
app.use("/maps", mapsRoutes(knex));
app.use("/markers", markersRoutes(knex));




  app.get("/", (req, res) => {
    res.redirect('/maps');
  });




app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
