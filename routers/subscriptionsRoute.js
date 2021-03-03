const express = require("express");
const SubscriptionController = require("../controllers/subscriptionsController");
const subscription = new SubscriptionController();
const app = express.Router();

app.get("/", async (req, res, next) => {
  const result = await subscription.get().catch(next);
  res.send(result);
});

app.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const result = await subscription.get({ id }).catch(next);
  res.send(result);
});

app.post("/", async (req, res, next) => {
  const result = await subscription.add(req.body).catch(next);
  res.send(result);
});

app.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  await subscription.edit(id, req.body).catch(next);
  res.send("Update success!");
});

app.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  await subscription.remove(id).catch(next);
  res.send("Delete success!");
});

module.exports = app;
