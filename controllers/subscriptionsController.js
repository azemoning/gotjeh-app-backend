const { nanoid } = require("nanoid");
const { Subscriptions } = require("../models");
const BaseController = require("./baseController");

class SubscriptionController extends BaseController {
  constructor() {
    super(Subscriptions);
  }

  getAllSubscriptions() {
    return async (req, res) => {
      const result = await Subscriptions.findAll()
      res.status(200).send(result)
    }
  }

  getSubscriptionById() {
    return async (req, res) => {
      const { id } = req.params
      const result = await Subscriptions.findOne({
        where: {
          id: id
        }
      })

      res.status(200).send(result)
    }
  }

  addNewSubscription() {
    return async (req, res) => {
      const result = await Subscriptions.create({
        id: nanoid(),
        ...req.body
      })

      res.status(201).send(result)
    }
  }

  updateSubscription() {
    return async (req, res) => {
      const { id } = req.params
      const result = await Subscriptions.update(req.body, {
        where: {
          id: id
        }
      })

      res.status(200).send(result)
    }
  }

  deleteSubscription() {
    return async (req, res) => {
      const { id } = req.params
      const result = await Subscriptions.destroy({
        where: {
          id: id
        }
      })

      res.status(200).send(result)
    }
  }
}

module.exports = SubscriptionController;
