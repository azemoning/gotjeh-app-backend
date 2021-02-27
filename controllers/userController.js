const { Users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const BaseController = require("./baseController");
const { nanoid } = require("nanoid");

class UserController extends BaseController {
  constructor() {
    super(Users);
  }

  async register(firstname, lastname, picture, email, password) {
    const encryptedPassword = await bcrypt.hash(password, 5);
    const id = nanoid();
    const payload = {
      id,
      firstname,
      lastname,
      picture,
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
    if (await bcrypt.compare(password, user.password)) {
      const payload = {
        id: user.id,
        email: user.email,
        token: jwt.sign({ id: user.id }, process.env.JWT_SECRET),
      };
      return payload;
    } else {
      return "wrong password!";
    }
  }
}

module.exports = UserController;
