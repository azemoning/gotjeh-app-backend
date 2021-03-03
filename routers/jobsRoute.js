const express = require("express");
const JobController = require("../controllers/jobsController");
const job = new JobController();
const app = express.Router();

app.get("/", async (req, res, next) => {
  const result = await job.get().catch(next);
  res.send(result);
});

app.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const result = await job.get({ id }).catch(next);
  res.send(result);
});

app.post("/", async (req, res, next) => {
  const result = await job.add(req.body).catch(next);
  res.send(result);
});

app.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  await job.edit(id, req.body).catch(next);
  res.send("Update success!");
});

app.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  await job.remove(id).catch(next);
  res.send("Delete success!");
});

module.exports = app;
