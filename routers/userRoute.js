const express = require("express");
const UserController = require("../controllers/userController");
const user = new UserController();
const { Users } = require('../models')
const isExist = require('../middlewares/isExist')
const app = express.Router();

app.get("/", user.getAllUsers());
app.get("/:id", isExist(Users), user.getUserById());
app.put("/:id", user.updateUserProfile());
app.put("/role/promote", isExist(Users), user.promoteUserToAdmin())
app.post("/reset_password", isExist(Users), user.resetPassword)
app.delete("/:id", user.deleteUserById());

module.exports = app;
