const express = require("express");
const CategoryController = require("../controllers/categoriesController");
const category = new CategoryController();
const { Categories } = require('../models')
const isExist = require('../middlewares/isExist')
const app = express.Router();

app.route('/')
  .get(category.getAllCategories())
  .post(category.addNewCategory());

app.route('/:id')
  .get(isExist(Categories), category.getCategoryById())
  .put(isExist(Categories), category.updateCategory())
  .delete(isExist(Categories), category.deleteCategory())



module.exports = app;
