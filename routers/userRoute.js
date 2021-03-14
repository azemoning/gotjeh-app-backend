const express = require("express");
const UserController = require("../controllers/userController");
const user = new UserController();
const { Users } = require('../models')
const isExist = require('../middlewares/isExist')
const isAdmin = require('../middlewares/isAdmin')
const passport = require("../middlewares/passportMiddleware");
const restrict = passport.authenticate('jwt', { session: false })
const app = express.Router();

app.route('/')
    .get(restrict, isAdmin(Users), user.getAllUsers());

app.route('/role/promote')
    .put(isExist(Users), user.promoteUserToAdmin())

app.route('/reset_password')
    .post(isExist(Users), user.resetPassword)

app.route('/courses/enroll')
    .post(user.enrollCourse())

app.route('/courses/:id')
    .get(user.getEnrolledCourses())

app.route('/:id')
    .get(user.getUserById())
    .put(user.updateUserProfile())
    .delete(user.deleteUserById())

module.exports = app;
