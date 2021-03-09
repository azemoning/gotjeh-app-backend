const express = require("express");
const SubscriptionController = require("../controllers/subscriptionsController");
const subscription = new SubscriptionController();
const { Subscription } = require('../models')
const isExist = require('../middlewares/isExist')
const app = express.Router();

app.route('/')
  .get(subscription.getAllSubscriptions())
  .post(subscription.addNewSubscription())

app.route('/:id')
  .get(isExist(Subscription), subscription.getSubscriptionById())
  .put(isExist(Subscription), subscription.updateSubscription())
  .delete(isExist(Subscription), subscription.deleteSubscription())

module.exports = app;
