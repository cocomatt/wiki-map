"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));



const allAppGets = () => {



  /* LANDING PAGE
   * 	REQUIRES: (empty)
   * 	PROMISES: Redirects to all maps
   ***********************************/
  app.get("/", (req, res) => {
    res.redirect('/maps');
  });



  /* SHOW ALL MAPS
   * 	REQUIRES: User session to create, edit and favorite a map
   * 	PROMISES: Show maps, titles and markers even if user isn't logged in
   ************************************************************************/
  app.get("/maps", (req, res) => {
 


    let templateVars = {
      urls: userSpecificURLS,
      username: userDatabase[req.session.user_id]
    }

    res.render("maps", templateVars);
  });



  /* SHOW SPECIFIC MAP
   * 	REQUIRES: User session to create, edit and favorite a map
   * 	PROMISES: Specific map shown with title and markers even if user isn't logged in
   ************************************************************************************/
  app.get("/maps/:id", (req, res) => {



    let templateVars = {
      urls: userSpecificURLS,
      username: userDatabase[req.session.user_id]
    }

    res.render("maps_id", templateVars);
  });



  /* SHOW SPECIFIC MAP
   * 	REQUIRES: User session to create, edit and favorite a map
   * 	PROMISES: Specific user shown with username, icon, maps created(titles and markers) and maps favroited
   **********************************************************************************************************/
  app.get("/user/:id", (req, res) => {



    let templateVars = {
      urls: userSpecificURLS,
      username: userDatabase[req.session.user_id]
    }

    res.render("user_id", templateVars);
  });
}
allAppGets();



const allAppUpdates = () => {
  /* EDIT MAP
   * 	REQUIRES: User session to create, edit and favorite a map
   * 	PROMISES: Specific map shown with title and markers even if user isn't logged in
   ************************************************************************************/
  app.update("/map/:id/edit", (req, res) => {



    let templateVars = {
      urls: userSpecificURLS,
      username: userDatabase[req.session.user_id]
    }

    res.render("edit_map", templateVars);
  });
}
allAppUpdates();



const allAppPosts = () => {



  /* CREATE NEW MAP
   * 	REQUIRES: User session to create, edit and favorite a map
   * 	PROMISES: Specific map shown with title and markers even if user isn't logged in
   *************************************************************************************/
  app.post("/map/:id/new", (req, res) => {


    res.redirect('/map');
  });



  /* HEADER BAR LOGIN REQUEST
   * 	REQUIRES: User exists with password
   * 	PROMISES: Encrypted user session with cookie
   *************************************************/
  app.post("/login", (req, res) => {



    let templateVars = {
      urls: userSpecificURLS,
      username: userDatabase[req.session.user_id]
    }

    res.render("index", templateVars);
  });
}
allAppPosts();



const allAppDeletes = () => {



  /* HEADER BAR LOGOUT
   * 	REQUIRES: User session exists with cookie
   * 	PROMISES: User session terminated
   **************************************/
  app.delete("/user/:id/delete", (req, res) => {



    let templateVars = {
      urls: userSpecificURLS,
      username: userDatabase[req.session.user_id]
    }

    res.render("index", templateVars);
  });



  /* DELETE MAP
   * 	REQUIRES: User session to create, edit and favorite a map
   * 	PROMISES: Specific map shown with title and markers even if user isn't logged in
   *************************************************************************************/
  app.update("/map/:id/delete", (req, res) => {

    let templateVars = {
      urls: userSpecificURLS,
      username: userDatabase[req.session.user_id]
    }

    res.render("edit_map", templateVars);
  });
}

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});