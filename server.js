
//Dependencies
var express = require("express");
// (For handlebars)
var exphbs = require("express-handlebars");

var app = express();
var bodyParser=require("body-parser");
var session=require("express-session");
var passport=require("./config/passport");


var PORT = process.env.PORT || 8080;
var db = require("./models");

// (For handlebars)
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json);
app.use(express.static("public"));
app.use(session({secret:"codereview", resave: true, saveUninitialzed:true}));
app.use(passport.initialize());
app.use(passport.session());


var cards = [

  {
    id: 1,
    question: "Open your console log.  Find the object's fifth index.  What is the name of the pokemon inside?",
    answer: "Charizard"
  },
  {
    id: 2,
    question: "What is JSON?",
    answer: "JavaScript Object Notation. JSON is a minimal, readable format for structuring data. It is used primarily to transmit data between a server and web application, as an alternative to XML."
  },
  {
    id: 3,
    question: "What does AJAX stand for?",
    answer: "Asynchronous JavaScript and XML."
  },
  {
    id: 4,
    question: "What do AJAX requests do?",
    answer: "They query data asynchronously with your app performing in the background."
  },
  {
    id: 5,
    question: "What is the minimum datatype needed for an AJAX request?",
    answer: "A URL string."
  },
  {
    id: 6,
    question: "What is url?",
    answer: "A uniform resource locator (URL) is the address of a resource on the Internet. A URL indicates the location of a resource as well as the protocol used to access it."
  },
  {
    id: 7,
    question: "What is http?",
    answer: "Stands for Hypertext Transfer Protocol. HTTP is the protocol used to transfer data over the web. It is part of the Internet protocol suite and defines commands and services used for transmitting webpage data. HTTP uses a server-client model"
  },
  {
    id: 8,
    question: "What is https?",
    answer: "Hyper Text Transfer Protocol Secure (HTTPS) is the secure version of HTTP, the protocol over which data is sent between your browser and the website that you are connected to."
  },
  {
    id: 9,
    question: "What does the (document).ready() function do?",
    answer: "Function runs all of code inside of it once our page has finished loading."
  },
  {
    id: 10,
    question: "Every page on the internet is stored...where?",
    answer: "Somewhere on a remote server"
  },
  {
    id: 11,
    question: "what do engineers use to develop websites before releasing them to the public?",
    answer: "A local server"
  },
  {
    id: 12,
    question: "What happens when you type www.facebook.com into your browser? and when your browser receives the response? What is the API in this case",
    answer: "A request goes out to Facebook's remote server. Once your browser receives the response, it interprets the code and displays the page. To the browser, also known as the client, Facebook's server is an API."
  },
  {
    id: 13,
    question: "How does API differ from remote server?",
    answer: "An API isn't the same as the remote server — rather it is the part of the server that receives requests and sends responses."
  },
  {
    id: 14,
    question: "True or False: Every time you visit a page on the Web, you interact with some remote server's API",
    answer: "True"
  },
  {
    id: 15,
    question: "GET request",
    answer: "An internet request for data. Sent from a client to a server."
  },
  {
    id: 16,
    question: "Response",
    answer: "A server's response to a request. Sent from a server to a client. A response to a GET request will usually include data that the client needs to load the page's content."
  },
  {
    id: 17,
    question: "requesting asynchronously",
    answer: "means that requests/responses can happen in the background without blocking the rest of the page load"
  },
  {
    id: 18,
    question: "callback",
    answer: "instructions that I can do something with when I get a response back; call on instructions when I get a response back"
  },
  {
    id: 19,
    question: "What is API?",
    answer: "Application Programming Interface. Tools computers use to communicate with each other"
  }
];


// Routes
app.get("/sets", function (req, res) {
  data = cards;
  res.render("sets", data);
});

app.get("/cards", function (req, res) {
  data = cards;
  res.render("cards", data);
});

app.get("/all-cards", function (req, res) {

  // 2. Loop through the animals, and send those that are pets to the index handlebars file.
  var data = {
    cards: []
  };

  for (var i = 0; i < cards.length; i += 1) {
    // Get the current animal.
    var currentCard = cards[i];
    data.cards.push(currentCard);
  }

  res.render("index2", data);
});


// db.sequelize.sync.then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });


// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);


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