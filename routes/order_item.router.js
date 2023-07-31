const express = require('express');
const orderItemRouter = express.Router();

const OrderItemController = require('../controllers/order_item.controller');
const orderItemController = new OrderItemController();

orderItemRouter.post('/items/:item_id/orders', orderItemController.orderItem);
orderItemRouter.put(
  '/items/:item_id/orders/:order_id',
  orderItemController.updateOrder
);

module.exports = orderItemRouter;
