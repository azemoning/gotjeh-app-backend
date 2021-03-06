const { Categories } = require("../models");
const BaseController = require("./baseController");
const { Op } = require('sequelize')

class CategoryController extends BaseController {
  constructor() {
    super(Categories);
  }
}

module.exports = CategoryController;
