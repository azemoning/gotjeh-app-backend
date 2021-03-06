const express = require("express");
const UserController = require("../controllers/userController");
const user = new UserController();
const { Users } = require('../models')
const app = express.Router();

app.get("/", async (req, res, next) => {
  const result = await user.getAllUsers(Users).catch(next);
  res.send(result);
});

app.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const result = await user.getUsersById(id, Users).catch(next);
  if (!result) {
    res.status(404).json({ "error": "User not found" })
  }
  res.send(result);
});

app.put("/role/promote", async (req, res, next) => {
  const { id } = req.body
  const result = await user.promoteUserToAdmin(id, Users).catch(next)
  if (!result) {
    res.status(404).json({ "error": "User not found" })
  } else {
    res.status(200).json({ "message": "User promoted to administrator" })
  }
})

app.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const result = await user.updateUserProfile(id, req.body, Users).catch(next);
  if (!result) {
    res.status(404).json({ "error": "User not found" })
  }
  res.send(result)
});

app.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  const result = await user.deleteUserById(id, Users).catch(next);
  if (!result) {
    res.status(404).json({ "error": "User not found" })
  } else {
    res.send(result)
  }
});

app.post("/reset_password", async (req, res, next) => {
  const { email } = req.body
  const result = await user.resetUserPassword(email, Users)
  if (!result) {
    res.status(404).json({ "error": "User not found" })
  } else {
    res.status(200).json({ "message": result })
  }
})



module.exports = app;
