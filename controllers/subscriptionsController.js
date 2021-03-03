const { Subscriptions } = require("../models");
const BaseController = require("./baseController");

class SubscriptionController extends BaseController {
  constructor() {
    super(Subscriptions);
  }
}

module.exports = SubscriptionController;
