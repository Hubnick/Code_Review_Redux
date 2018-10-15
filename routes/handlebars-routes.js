var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function (app) {

    app.get("/", function (req, res) {
         res.redirect("/login");
        //  res.end();
    },

        app.get("/login", function (req, res) {
            if (req.user) {
                res.redirect("/members");
                return;
            }
            res.render("login");
        },

            app.get("/members", isAuthenticated, function (req, res) {
                res.render("members");

            },


                app.get("/signup", function (req, res) {
                    if (req.user) {
                        res.redirect("/members");
                        return;
                    }
                    res.render("signup");
                },

                    // app.get("/sets", function (req, res) {
                    //  
                    //   res.render("sets");
                    // },

                    // app.get("/cards", function (req, res) {
                    //  
                    //   res.render("cards");
                    // },

                    app.get("/module-html", isAuthenticated, function (req, res) {

                        res.render("module-html");
                    },

                        app.get("/module-css", isAuthenticated, function (req, res) {

                            res.render("module-css");
                        },

                            app.get("/module-javascript", isAuthenticated, function (req, res) {

                                res.render("module-javascript");
                            },

                                app.get("/module-jquery",isAuthenticated, function (req, res) {

                                    res.render("module-jquery");
                                },

                                    app.get("/module-api",isAuthenticated, function (req, res) {

                                        res.render("module-api");
                                    },

                                        app.get("/module-git", isAuthenticated, function (req, res) {

                                            res.render("module-git");
                                        },

                                            // app.get("/all-cards", function (req, res) {
                                            //   // 2. Loop through the animals, and send those that are pets to the index handlebars file.
                                            //   var data = {
                                            //     cards: []
                                            //   };
                                            //   for (var i = 0; i < cards.length; i += 1) {
                                            //     // Get the current animal.
                                            //     var currentCard = cards[i];
                                            //     data.cards.push(currentCard);
                                            //   };

                                            //   res.render("index2");
                                            // })

                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    );



















}