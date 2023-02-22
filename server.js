const express = require("express");
const parser = require("body-parser");
const path = require("path");
const app = express();
app.use(parser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.listen(3000, (req, res) => {
  console.log("hey i am working");
});

app.get("/", (req, res) => {
  res.sendFile("public/html/index.html", { root: __dirname });
});
