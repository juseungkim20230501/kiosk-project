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

      return res.status(201).json({ data: createItemData });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ errorMessage: '상품 추가에 실패하였습니다.' });
    }
  };

  getItem = async (req, res) => {
    try {
      const getItemData = await this.itemService.getItem();

      return res.status(200).json({ data: getItemData });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ errorMessage: '상품 조회의 실패하였습니다.' });
    }
  };

  getItemsByType = async (req, res) => {
    try {
      const { type } = req.params;

      const getItemsByTypeData = await this.itemService.getItemsByType(type);

      return res.status(200).json({ data: getItemsByTypeData });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ errorMessage: '상품 조회의 실패하였습니다.' });
    }
  };

  deleteItem = async (req, res) => {
    try {
      const { id } = req.params;

      const check = await this.itemService.deleteItem(id);

      return res.status(200).json({ message: check.message });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ errorMessage: '상품 삭제에 실패하였습니다.' });
    }
  };

  deleteConfirm = async (req, res) => {
    try {
      const { id } = req.params;
      const { answer } = req.body;

      const check = await this.itemService.deleteConfirm(id, answer);

      return res.status(200).json({ message: check.message });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ errorMessage: '상품 삭제에 실패하였습니다.' });
    }
  };

  updateItem = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, price } = req.body;

      await this.itemService.updateItem(id, name, price);

      return res.status(200).json({ message: '상품 정보를 수정하였습니다.' });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ errorMessage: '상품 정보 수정에 실패하였습니다.' });
    }
  };
}

module.exports = ItemController;
