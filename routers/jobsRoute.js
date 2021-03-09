const express = require("express");
const JobController = require("../controllers/jobsController");
const job = new JobController();
const { Jobs } = require('../models')
const isExist = require('../middlewares/isExist')
const app = express.Router();

app.route('/')
  .get(job.getAllJobs())
  .post(job.addNewJob());

app.route('/:id')
  .get(isExist(Jobs), job.getJobsById())
  .put(isExist(Jobs), job.updateJob())
  .delete(isExist(Jobs), job.deleteJob())

app.route('/approved')
  .get(job.getApprovedJobs())

module.exports = app;
