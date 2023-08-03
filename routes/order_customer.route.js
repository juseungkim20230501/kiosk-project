const express = require('express');
const orderCustomerRouter = express.Router();

const OrderCustomerController = require('../controllers/order_customer.controller');
const orderCustomerController = new OrderCustomerController();

orderCustomerRouter.post(
  '/ordercustomers',
  orderCustomerController.orderCustomer
);
orderCustomerRouter.put(
  '/ordercustomers/:order_customer_id/:item_id',
  orderCustomerController.updateOrderCustomer
);
orderCustomerRouter.delete(
  '/ordercustomer/:order_customer_id',
  orderCustomerController.deleteOrderCustomer
);

module.exports = orderCustomerRouter;
