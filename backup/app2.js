//jshint esversion:6

const express = require("express");
const bodyParser = require("body-Parser");

const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.set('view engine', "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  var today = new Date();
  // var currentDay = today.getDay();
  // var day = "";

  // var today = new Date();
  // var dd = String(today.getDate()).padStart(2, '0');
  // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  // var yyyy = today.getFullYear();
  //
  // today = mm + '/' + dd + '/' + yyyy;
  // document.write(today);
  // res.send(today);


var options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};

var day = today.toLocaleDateString("en-US", options);

  // if (currentDay === 6 || currentDay === 0) {
  //   day = "Weekend";
  // } else {
  //   day = "Weekday";
  // }

  res.render("list", {kindOfDay: day, newListItems: items});

});


app.post("/", function(req, res){
  var item = req.body.newItem;
  // console.log(item);
  items.push(item);

  res.redirect("/");

});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
