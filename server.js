
//Dependencies
var express = require("express");
var bodyParser=require("body-parser");
var session=require("express-session");
var passport=require(".config/passport");


var PORT = process.env.PORT || 8080;
var db = require("./models");

//Setting Express
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json);
app.use(express.static("public"));
app.use(session({secret:"codereview", resave: true, saveUninitialzed:true}));
app.use(passport.initialize());
app.use(passport.session());


require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


db.sequelize.sync.then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
