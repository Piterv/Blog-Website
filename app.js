const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.get("/", function(req, res){
  res.send("hi");
});

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));




app.listen(3000, function(req, res){
  console.log("Server is runing on port 3000");
});
