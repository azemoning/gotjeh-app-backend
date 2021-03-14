const express = require("express");
const JobController = require("../controllers/jobsController");
const job = new JobController();
const { Jobs } = require("../models");
const isExist = require("../middlewares/isExist");
const app = express.Router();

app.route("/").get(job.getAllJobs()).post(job.addNewJob());

app.route("/approved").get(job.getApprovedJobs());

app.route("/search").get(job.searchByJobName());

app.route("/filter").get(job.filterByJobCategory());

app
  .route("/:id")
  .get(job.getJobsById())
  .put(job.updateJob())
  .delete(job.deleteJob());

module.exports = app;
