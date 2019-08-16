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

app.use(passport.initialize())
app.use(passport.session())
// Requiring our models for syncing
var db = require("./models");

//	Import Passport Strategies & Config
require('./config/jwtConfig');
require('./config/passport');

require('./routes/User')(app);
require('./routes/auth')(app);
require('./routes/API')(app);
require('./routes/sponsors')(app);


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});


module.exports = app;