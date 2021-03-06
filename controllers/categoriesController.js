const { Categories } = require("../models");
const BaseController = require("./baseController");
const { Op } = require('sequelize')

class CategoryController extends BaseController {
  constructor() {
    super(Categories);
  }

  getCategoryByName(name, model) {
    const result = model.findOne({
      where: {
        name: {
          [Op.startsWith]: name
        }
      }
    })

    if (!result) {
      return false
    } else {
      return result
    }
  }
}

module.exports = CategoryController;
