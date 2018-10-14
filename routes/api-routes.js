var db = require("../models");
var express = require('express');
var router = express.Router();
var passport = require("../config/passport");
//passport.authenticate("local"), 

  router.post("/login", function(req, res, next) {
    passport.authenticate("local", (err, user, info)=>{
      if (err) { return next(err); }
      if (!user) { return res.json({auth: false}); }
      req.logIn(user, function(err) {
          if (err) { return next(err); }
          
          return res.json({isUser : true, user: user});
        });
    })(req, res,next);

 
  });

  router.post("/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });

  router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  router.get("/user_data", function(req, res) {
    if (!req.user) {
      res.json({});
    }
    else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

module.exports = router