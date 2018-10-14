var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function (app) {

    app.get("/", function (req, res) {
        if (req.user) {
            res.redirect("/members");
        }
        res.render("signup");
    },

        app.get("/login", function (req, res) {
            if (req.user) {
                res.redirect("/members");
            }
            res.render("login");
        },

            app.get("/members", isAuthenticated, function (req, res) {
                res.render("members");

            },


                app.get("/signup", function (req, res) {
                    if (req.user) {
                        res.redirect("/members");
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

                    app.get("/module-html", function (req, res) {

                        res.render("module-html");
                    },

                        app.get("/module-css", function (req, res) {

                            res.render("module-css");
                        },

                            app.get("/module-javascript", function (req, res) {

                                res.render("module-javascript");
                            },

                                app.get("/module-jquery", function (req, res) {

                                    res.render("module-jquery");
                                },

                                    app.get("/module-api", function (req, res) {

                                        res.render("module-api");
                                    },

                                        app.get("/module-git", function (req, res) {

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