const express = require('express');
const itemRouter = express.Router();

const ItemController = require('../controllers/item.controller');
const itemController = new ItemController();

itemRouter.post('/items', itemController.createItem);
itemRouter.get('/items', itemController.getItem);
itemRouter.get('/items/:type', itemController.getItemsByType);
itemRouter.delete('/items/:id', itemController.deleteItem);
itemRouter.delete('/items/amount/:id', itemController.deleteConfirm);
itemRouter.put('/items/:id', itemController.updateItem);

module.exports = itemRouter;
