const express = require("express");
const UserController = require("../controllers/userController");
const auth = new UserController();
const app = express.Router();

app.post("/register", auth.register());
app.post("/login", auth.login());
// app.post("/logout", auth.logout());

module.exports = app;
