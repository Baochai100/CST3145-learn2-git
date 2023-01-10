var express = require("express");
var app = express();
const cors = require("cors");
app.use(cors());

app.get("/favicon.ico", (req, res) => res.status(204));

app.use(function (req, res, next) {
  console.log("Url requested: " + req.url);
  //res.end("welcome!");
  next();
});
app.get("/", function (req, res) {
  res.end("welcome!");
});
app.set("json spaces", 3);
const lessons = [
  { topic: "math", location: "Hendon", price: 100 },
  { topic: "math", location: "Colindale", price: 80 },
  { topic: "math", location: "Brent Cross", price: 90 },
  { topic: "math", location: "Golders Green", price: 120 },
];

const user = [{ email: "user@email.com", password: "mypassword" }];

app.get("/lessons", function (req, res) {
  res.json(lessons);
});

app.get("/user", function (req, res) {
  res.end(JSON.stringify(user, null, 2));
});
//   var userId = parseInt(req.params.userid, 10);
//   //res.send("User: " + req.params.userid);

//   if (isNaN(userId)) {
//     res.status(404).send("The userid is not valid!");
//   } else {
//     res.send("User: " + userId);
//   }
// });

app.get(/^\/users\/(\d+)$/, function (req, res) {
  // Convert userid into an integer
  var userId = parseInt(req.params[0], 10); // base 10
  res.end(JSON.stringify(user, null, 2));
});

// localhost:3000/search?q=javascriptthemed%20burrito
app.get("/search", function (req, res) {
  if (req.query.q === "javascript-themed burrito") {
    res.send("Burrito search performed");
  } else {
    res.send("Another query and/or parameter");
  }
});

app.use(function (req, res) {
  res.status(404).send("Page not found!");
});

app.listen(3000, function () {
  console.log("App started on port 3000");
});
