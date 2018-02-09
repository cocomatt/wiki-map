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
const mapsRoutes  = require('./routes/maps');
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
app.use("/api/users", usersRoutes(knex));
app.use("/api/maps", mapsRoutes(knex));


const queryEzPz = (table, key, value) => {
  knex.select("*")
      .from(`${table}`)
      .where(`${value}, like, ${key}`)
      .then((result) => {
        return result;
  });
}


const loginEzPz = (user, pass) => {
  knex.selects('*')
      .from('users')
      .where({
        email:    `${user}`,
        password: `${pass}`
       })
      .then((result) => {
        return result;})
}



  /* REDIRECT PAGE
   *  REQUIRES: (empty)
   *  PROMISES: Redirects to all maps
   ***********************************/
  app.get("/", (req, res) => {
    res.redirect('/maps');
  });



  /* SHOW ALL MAPS PAGE
   *  REQUIRES: User session to create, edit and favorite a map
   *  PROMISES: Show maps, titles and markers even if user isn't logged in
   ************************************************************************/
  app.get("/maps", (req, res) => {

    res.render("maps", {users: queryEzPz(users, name, email)});
  });



  /* SHOW SPECIFIC MAP PAGE
   *  REQUIRES: User session to create, edit and favorite a map
   *  PROMISES: Specific map shown with title and markers even if user isn't logged in
   ************************************************************************************/
  app.get("/maps/:id", (req, res) => {




    res.render("maps_id", {users: userArr});
  });



  /* CREATE NEW MAP PAGE
   *  REQUIRES: User session to create, edit and favorite a map
   *  PROMISES: Specific map shown with title and markers even if user isn't logged in
   *************************************************************************************/
  app.get("/map/:id/new", (req, res) => {



    res.render('new_map', {users: userArr});
  });



  /* SHOW SPECIFIC USER PAGE
   *  REQUIRES: User session to create, edit and favorite a map
   *  PROMISES: Specific user shown with username, icon, maps created(titles and markers) and maps favroited
   **********************************************************************************************************/
  app.get("/user/:id", (req, res) => {



    res.render("user_id", {users: userArr});
  });



  /* REGISTRATION PAGE
   *  REQUIRES: User is not currently registered
   *  PROMISES: User is redirected to registration page
   *****************************************************/
  app.get("/user/:id/new", (req, res) => {


    res.render("register");
  });




  /* EDIT MAP
   *  REQUIRES: User session and map title, id, array of markers
   *  PROMISES: Specific map shown with title and markers even if user isn't logged in
   ************************************************************************************/
  app.post("/map/:id/edit", (req, res) => {



    res.redirect("/maps/:id", templateVars);
  });



  /* SEND USER REGISTRATION
   *  REQUIRES: User inputs username, email and password
   *  PROMISES: Account generated, encrypted password, and session created at new profile
   ***************************************************************************************/
  app.post("/register", (req, res) => {



    res.redirect("/user/:id", templateVars);
  });


  /* SEND HEADER BAR LOGIN
   *  REQUIRES: All users that exist in an appended object
   *  PROMISES: Encrypted user session with cookie
   *************************************************/
  app.post("/login", (req, res) => {



    res.render("/user/:id", templateVars);
  });




  /* SEND USER LOGOUT REQUEST
   *  REQUIRES: User session email
   *  PROMISES: User session terminated, redirected to maps page
   **************************************/
  app.delete("/user/:id/delete", (req, res) => {




    res.redirect("/maps", templateVars);
  });



  /* SEND DELETE MAP REQUEST
   *  REQUIRES: User session email and map id to be deleted
   *  PROMISES: Map deleted user redirected to all maps created
   **************************************************************/
   app.delete("/map/:id/delete", (req, res) => {




//     res.redirect("/user/:id", templateVars);
//   });
// }


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
