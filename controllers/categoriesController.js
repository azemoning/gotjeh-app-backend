const { Categories } = require("../models");
const BaseController = require("./baseController");
const { nanoid } = require("nanoid");

class CategoryController extends BaseController {
  constructor() {
    super(Categories);
  }

  getAllCategories() {
    return async (req, res) => {
      const result = await Categories.findAll()
      res.status(200).send(result)
    }
  }

  getCategoryById() {
    return async (req, res) => {
      const { id } = req.body
      const result = await Categories.findOne({
        where: {
          id: id
        }
      })

      res.status(200).send(result)
    }
  }

  addNewCategory() {
    return async (req, res) => {
      const result = await Categories.create({
        id: nanoid(),
        ...req.body
      })

      res.status(201).send(result)
    }
  }

  updateCategory() {
    return async (req, res) => {
      const { id } = req.params
      const result = await Categories.update(req.body, {
        where: {
          id: id
        }
      })

      res.status(200).send(result)
    }
  }

  deleteCategory() {
    return async (req, res) => {
      const { id } = req.params
      const result = await Categories.destroy({
        where: {
          id: id
        }
      })

      res.status(200).send(result)
    }
  }
}

module.exports = CategoryController;
