//jshint esversion:6

const express = require("express");
const bodyParser = require("body-Parser");
const date = require(__dirname + "/date.js");

// console.log(date());
//add parenthesis in order to activate the function

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.set('view engine', "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); //to let server know public folder in project

app.get("/", function(req, res) {

//declare variable day
let day = date.getDate(); //call function that bound to const date

//day variable will be pass into the listTitle
  res.render("list", {listTitle: day, newListItems: items});

});


app.post("/", function(req, res){
  // console.log(req.body);
  let item = req.body.newItem;

  if (req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post("/work", function(req, res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about", function(req, res){
  res.render("about");
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});



// Note //
/*
var : global whenever it stay
let : global if declare outside curly braces, local when inside curly braces
const : global if declare outside curly braces, local when inside curly braces
*/
