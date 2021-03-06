const { Users } = require("../models");
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

  async register(firstname, lastname, email, password) {
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
    return payload;
  }

  async login(email, password) {
    const user = await Users.findOne({
      where: { email },
    });
    if (!user) {
      return false
    } else {
      if (await bcrypt.compare(password, user.password)) {
        const payload = {
          id: user.id,
          email: user.email,
          token: jwt.sign({ id: user.id }, process.env.JWT_SECRET),
        };
        return payload;
      } else {
        return "wrong password";
      }
    }
  }

  getAllUsers(model) {
    return model.findAll({
      attributes: [
        'id',
        'firstname',
        'lastname',
        'picture',
        'role',
        'email'
      ]
    })
  }

  getUsersById(id, model) {
    const result = model.findOne({
      attributes: [
        'id',
        'firstname',
        'lastname',
        'picture',
        'role',
        'email'
      ],
      where: {
        id: id
      }
    })
    return result
  }

  deleteUserById(id, model) {
    const result = model.findOne({
      attributes: [
        'id',
        'firstname',
        'lastname',
        'picture',
        'role',
        'email'
      ],
      where: {
        id: id
      }
    })

    if (!result) {
      return false
    } else {
      model.destroy({
        where: {
          id
        }
      })
      return result
    }
  }

  async updateUserProfile(id, data, model) {
    const isExist = await model.findOne({
      where: {
        id: id
      }
    })
    if (!isExist) {
      return false
    } else {
      if (data.password) {
        const encryptedPassword = await bcrypt.hash(data.password, 5)
        const payload = {
          firstname: data.firstname,
          lastname: data.lastname,
        }
        await model.update({
          ...payload,
          password: encryptedPassword
        }, {
          where: {
            id: id
          }
        })

        return payload
      } else {
        await model.update(data, {
          where: {
            id: id
          }
        })

        return data
      }
    }
  }

  async resetUserPassword(email, model) {
    const emailExist = await model.findOne({
      where: {
        email: email
      }
    })
    const newPassword = nanoid(12)
    const encryptedPassword = await bcrypt.hash(newPassword, 5)

    if (!emailExist) {
      return false
    } else {
      await model.update({
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
          // return err;
        } else {
          console.log('email sent: ' + info.response);
          // return 'email sent: ' + info.response
        }
      })

      return "Check your email"
    }
  }
}

module.exports = UserController;
