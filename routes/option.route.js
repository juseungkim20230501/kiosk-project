const express = require('express');
const OptionRouter = express.Router();

const OptionController = require('../controllers/option.controller');
const optionController = new OptionController();

OptionRouter.post('/options', optionController.createOption);

module.exports = OptionRouter;
