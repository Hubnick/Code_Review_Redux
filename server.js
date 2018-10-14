var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("./config/passport");

var PORT = process.env.PORT || 8080;
var db = require("./models");

var app = express();

// (For handlebars)

// var apiRoutes = require("./routes/api-routes");

// (For handlebars)
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());




// app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(bodyParser.json);
// app.use(express.static("public"));
// app.use(session({ secret: "codereview", resave: true, saveUninitialzed: true }));
// app.use(passport.initialize());
// app.use(passport.session());





// db.sequelize.sync.then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });


require("./routes/api-routes.js")(app);
require("./routes/handlebars-routes.js")(app);


db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});

//potential CONFLICT between above and below LISTEN

// Start our server so that it can begin listening to client requests.
// app.listen(PORT, function () {
//   // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:" + PORT);
// });