const express = require("express");
const CategoryController = require("../controllers/categoriesController");
const category = new CategoryController();
const { Categories } = require('../models')
const app = express.Router();

app.get("/", async (req, res, next) => {
  const result = await category.get().catch(next);
  res.send(result);
});

app.get("/:name", async (req, res, next) => {
  const { name } = req.params
  const result = await category.getCategoryByName(name, Categories).catch(next);
  res.send(result);
});

app.post("/", async (req, res, next) => {
  const result = await category.add(req.body).catch(next);
  res.send(result);
});

app.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  await category.edit(id, req.body).catch(next);
  res.send("Update success!");
});

app.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  await category.remove(id).catch(next);
  res.send("Delete success!");
});



module.exports = app;
