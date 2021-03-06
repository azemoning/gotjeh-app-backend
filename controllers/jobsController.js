const { Jobs } = require("../models");
const BaseController = require("./baseController");
const { Op } = require('sequelize')

class JobController extends BaseController {
  constructor() {
    super(Jobs);
  }

  // approveJob(id, model) {
  //   const isExist = model.findOne({
  //     where: {
  //       id: id
  //     }
  //   })

  //   if (!isExist) {
  //     return false
  //   } else {
  //     model.update({
  //       is_approved: true
  //     }, {
  //       where: {
  //         id: id
  //       }
  //     })

  //     return "approved"
  //   }
  // }

  async updateJobInfo(id, data, model) {
    const isExist = await model.findOne({
      where: {
        id: id
      }
    })
    if (!isExist) {
      return false
    } else {
      if (data.is_approved === "true") {
        data.is_approved = true
      }
      await model.update(data, {
        where: {
          id: id
        }
      })
      return "updated"
    }
  }

  getApprovedJobs(model) {
    return model.findAll({
      where: {
        is_approved: true
      }
    })
  }
}

module.exports = JobController;
