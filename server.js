const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport")
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// Define middleware here                     
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./client/build"))

// Requiring our models for syncing
var db = require("./models");

//	Import Passport Strategies & Config
require('./config/jwtConfig');
require('./config/passport');

app.use(passport.initialize())
app.use(passport.session())


if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});


module.exports = app;