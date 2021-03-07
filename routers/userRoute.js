const express = require("express");
const UserController = require("../controllers/userController");
const user = new UserController();
const { Users } = require('../models')
const isExist = require('../middlewares/isExist')
const app = express.Router();

app.route('/')
    .get(user.getAllUsers());

app.route('/:id')
    .get(isExist(Users), user.getUserById())
    .put(user.updateUserProfile())
    .delete(user.deleteUserById())

app.route('/role/promote')
    .put(isExist(Users), user.promoteUserToAdmin())

app.route('/reset_password')
    .post(isExist(Users), user.resetPassword)

module.exports = app;
