const express = require("express");
const UserController = require("../controllers/userController");
const user = new UserController();
const app = express.Router();

app.post("/register", async (req, res) => {
  const { firstname, lastname, picture, email, password } = req.body;
  const result = await user.register(
    firstname,
    lastname,
    picture,
    email,
    password
  );
  res.send(result);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const result = await user.login(email, password);
  res.send(result);
});

module.exports = app;
