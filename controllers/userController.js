const { Users, Enrolled_Courses } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const BaseController = require("./baseController");
const { nanoid } = require("nanoid");
const nodemailer = require('nodemailer')
const mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.TRANSPORTER_EMAIL,
    pass: process.env.TRANSPORTER_PASS
  }
})
class UserController extends BaseController {
  constructor() {
    super(Users);
  }

  register() {
    return async (req, res) => {
      try {
        const { firstname, lastname, email, password } = req.body;
        const encryptedPassword = await bcrypt.hash(password, 5);
        const id = nanoid();
        const payload = {
          id,
          firstname,
          lastname,
          email,
        };
        await Users.create({
          ...payload,
          password: encryptedPassword,
        });
        payload.token = jwt.sign({ id }, process.env.JWT_SECRET);
        res.status(201).send(payload)
      } catch (error) {
        res.status(401).json({
          "code": 401,
          "error": "User already exist"
        })
      }
    }
  }

  login() {
    return async (req, res) => {
      const { email, password } = req.body;
      const user = await Users.findOne({
        where: { email },
      });
      if (!user) {
        res.status(404).send({
          "code": 404,
          "error": "User not found"
        })
      }
      if (await bcrypt.compare(password, user.password)) {
        const payload = {
          id: user.id,
          email: user.email,
          token: jwt.sign({ id: user.id }, process.env.JWT_SECRET),
        };
        res.status(200).send(payload);
      } else {
        res.status(401).send({
          "code": 401,
          "error": "Invalid password"
        })
      }
    }
  }

  promoteUserToAdmin() {
    return async (req, res) => {
      const { id } = req.body
      console.log('harusnya disini:', id);
      await Users.update({
        is_admin: true
      }, {
        where: {
          id: id
        }
      })

      res.status(200).json({ "message": "User promoted to admin" })
    }
  }

  getAllUsers() {
    return async (req, res) => {
      const result = await Users.findAll({
        attributes: [
          'id',
          'firstname',
          'lastname',
          'picture',
          'is_admin',
          'email'
        ]
      })

      res.status(200).send(result)
    }
  }

  getUserById() {
    return async (req, res) => {
      const { id } = req.params;
      const result = await Users.findOne({
        attributes: [
          'id',
          'firstname',
          'lastname',
          'picture',
          'is_admin',
          'email'
        ],
        where: {
          id: id
        }
      })

      res.status(200).send(result)
    }
  }

  deleteUserById() {
    return async (req, res) => {
      const { id } = req.params;
      const result = await Users.findOne({
        attributes: [
          'id',
          'firstname',
          'lastname',
          'picture',
          'is_admin',
          'email'
        ],
        where: {
          id: id
        }
      })

      if (!result) {
        res.status(404).json({ "error": "User not found" })
      } else {
        Users.destroy({
          where: {
            id
          }
        })
        res.status(200).send(result)
      }
    }
  }

  updateUserProfile() {
    return async (req, res) => {
      const { id } = req.params
      const data = { ...req.body }
      if (data.password) {
        const encryptedPassword = await bcrypt.hash(data.password, 5)
        const payload = {
          firstname: data.firstname,
          lastname: data.lastname,
        }
        await Users.update({
          ...payload,
          password: encryptedPassword
        }, {
          where: {
            id: id
          }
        })

        res.status(200).send(payload)
      } else {
        const result = await Users.update(data, {
          where: {
            id: id
          }
        })

        res.status(200).send(result)
      }
    }
  }

  resetPassword() {
    return async (req, res) => {
      const { email } = req.body
      const newPassword = nanoid(12)
      const encryptedPassword = await bcrypt.hash(newPassword, 5)

      await Users.update({
        password: encryptedPassword
      }, {
        where: {
          email: email
        }
      })

      const mailOptions = {
        from: 'gotjeh.app@gmail.com',
        to: email,
        subject: 'Gotjeh Account Password Reset',
        html: `<p>
        Halo ${email}, berikut password baru kamu: <b>${newPassword}</b> . 
        Jangan lupa ganti password yaa.
      </p>`
      }

      mailTransporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log('email sent: ' + info.response);
        }
      })

      res.status(200).send({ "message": "Check your email" })
    }
  }

  getEnrolledCourses() {
    return async (res, req) => {
      const { id } = req.params
      const result = await Enrolled_Courses.findAll({
        where: {
          user_id: id
        }
      })

      res.status(200).send(result)
    }
  }

  enrollCourse() {
    return async (req, res) => {
      const result = await Enrolled_Courses.create({
        id: nanoid(),
        ...req.body
      })
      res.status(201).send(result)
    }
  }
}

module.exports = UserController;
