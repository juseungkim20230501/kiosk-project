const express = require('express');
const itemRouter = express.Router();

const ItemController = require('../controllers/item.controller');
const itemController = new ItemController();

itemRouter.post('/item', itemController.createItem);
itemRouter.get('/item', itemController.getItem);
itemRouter.get('/item/:type', itemController.getItemsByType);
itemRouter.delete('/item/:id', itemController.deleteItem);
itemRouter.delete('/item/amount/:id', itemController.deleteConfirm)

module.exports = itemRouter;
