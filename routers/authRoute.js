const express = require("express");
const UserController = require("../controllers/userController");
const user = new UserController();
const app = express.Router();

app.post("/register", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const result = await user.register(
    firstname,
    lastname,
    email,
    password
  );
  res.status(201).send(result);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const result = await user.login(email, password);
  if (!result) {
    res.status(404).json({ "error": "User not found" })
  } else if (result === "wrong password") {
    res.status(401).json({ "error": "Invalid password" })
  } else {
    res.send(result)
  }
});

module.exports = app;
