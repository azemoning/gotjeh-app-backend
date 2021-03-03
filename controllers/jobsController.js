const { Jobs } = require("../models");
const BaseController = require("./baseController");

class JobController extends BaseController {
  constructor() {
    super(Jobs);
  }
}

module.exports = JobController;
