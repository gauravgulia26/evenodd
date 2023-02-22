const express = require("express");
const parser = require("body-parser");
const path = require("path");
const app = express();
const name = require("ejs");

app.use(parser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.listen(3000, (req, res) => {
  console.log("hey i am working");
});

app.get("/", (req, res) => {
  res.render("app", { result: "Result" });
});

app.post("/", (req, res) => {
  let nmbr = req.body.entered_number;
  if (nmbr % 2 === 0) {
    res.render("app", { result: "Even" });
  } else {
    res.render("app", { result: "Odd" });
  }
});
