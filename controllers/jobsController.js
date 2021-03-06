const { Jobs, Categories } = require("../models");
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
        include: {
          model: Categories,
          as: 'category',
          attributes: ['name']
        }
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
        include: {
          model: Categories,
          as: 'category',
          attributes: ['name']
        }
      });

      res.status(200).send(result);
    };
  }

  addNewJob() {
    return async (req, res) => {
      const {
        requester_name,
        requester_email,
        content,
        fee,
        category_id
      } = req.body
      const result = await Jobs.create({
        id: nanoid(),
        job_name: requester_name,
        job_email: requester_email,
        fee: fee,
        content: content,
        category_id: category_id
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
      let { search } = req.query;

      const fecthedJob = await Jobs.findAll({
        where: {
          job_name: {
            [Op.iLike]: `%${search.toLowerCase()}%`
          }
        },
        include: {
          model: Categories,
          as: 'category',
          attributes: ['name']
        }
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
      const filterJob = req.query.category;

      const fecthedJob = await Jobs.findAll({
        where: { category_id: filterJob },
        include: {
          model: Categories,
          as: 'category',
          attributes: ['name']
        }
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
