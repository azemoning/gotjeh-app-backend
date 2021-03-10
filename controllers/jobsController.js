const { Jobs } = require("../models");
const BaseController = require("./baseController");
const { Op } = require("sequelize");
const { nanoid } = require("nanoid");

class JobController extends BaseController {
  constructor() {
    super(Jobs);
  }

  getAllJobs() {
    return async (req, res) => {
      const result = await Jobs.findAll();
      res.status(200).send(result);
    };
  }

  getApprovedJobs() {
    return async (req, res) => {
      const result = await Jobs.findAll({
        where: {
          is_approved: true,
        },
      });

      res.status(200).send(result);
    };
  }

  getJobsById() {
    return async (req, res) => {
      const { id } = req.params;
      const result = await Jobs.findOne({
        where: {
          id: id,
        },
      });

      res.status(200).send(result);
    };
  }

  addNewJob() {
    return async (req, res) => {
      const result = await Jobs.create({
        id: nanoid(),
        ...req.body,
      });

      res.status(201).send(result);
    };
  }

  updateJob() {
    return async (req, res) => {
      const { id } = req.params;
      const result = await Jobs.update(req.body, {
        where: {
          id: id,
        },
      });
      res.status(200).send(result);
    };
  }

  deleteJob() {
    return async (req, res) => {
      const { id } = req.params;
      const result = await Jobs.destroy({
        where: {
          id: id,
        },
      });

      res.status(200).send(result);
    };
  }

  searchByJobName() {
    return async (req, res) => {
      let { searchJob } = req.query;

      //to lower case
      searchJob = searchJob.toLowerCase;

      const fecthedJob = await Jobs.findAll({
        where: { job_name: searchJob },
      });
      if (!fecthedJob) {
        res.status(404).send({ error: "Job not found" });
      } else {
        res.status(200).send(fecthedJob);
      }
    };
  }

  filterByJobCategory() {
    return async (req, res) => {
      const filterJob = req.query.category_id;

      const fecthedJob = await Jobs.findOne({
        where: { category_id: filterJob },
      });
      if (!fecthedJob) {
        res.status(404).send({ error: "Job not found" });
      } else {
        res.status(200).send(fecthedJob);
      }
    };
  }
}

module.exports = JobController;
