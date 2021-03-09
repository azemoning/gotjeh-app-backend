const express = require("express");
const app = express.Router();

app.get("/", async (req, res) => {
  res.send("Welcome to Team E - Gotjeh Project");
});

module.exports = app;
