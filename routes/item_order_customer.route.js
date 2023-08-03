const express = require('express');
const itemOrderCustomerRouter = express.Router();

const ItemOrderCustomerController = require('../controllers/item_order_customer.controller');
const itemOrderCustomer = new ItemOrderCustomerController();

itemOrderCustomerRouter.post(
  '/ordercustomers/:order_customer_id/:item_id',
  itemOrderCustomer.itemOrderCustomer
);

module.exports = itemOrderCustomerRouter;
