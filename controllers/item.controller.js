const { where } = require('sequelize');
const ItemService = require('../services/item.service');

class ItemController {
  itemService = new ItemService();

  createItem = async (req, res) => {
    try {
      const { name, option_id, price, type, amount } = req.body;

      const createItemData = await this.itemService.createItem(
        name,
        option_id,
        price,
        type,
        amount
      );

      res.status(201).json({ data: createItemData });
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: '상품 추가에 실패하였습니다.' });
    }
  };

  getItem = async (req, res) => {
    try {
      const getItemData = await this.itemService.getItem();

      res.status(200).json({ data: getItemData });
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: '상품 조회의 실패하였습니다.' });
    }
  };

  getItemsByType = async (req, res) => {
    try {
      const { type } = req.params;

      const getItemsByTypeData = await this.itemService.getItemsByType(type);

      res.status(200).json({ data: getItemsByTypeData });
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: '상품 조회의 실패하였습니다.' });
    }
  };
}

module.exports = ItemController;
