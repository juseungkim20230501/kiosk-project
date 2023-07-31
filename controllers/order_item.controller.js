const OrderItemService = require('../services/order_item.service');

class OrderItemController {
  orderItemService = new OrderItemService();

  orderItem = async (req, res) => {
    try {
      const { item_id } = req.params;
      const { amount } = req.body;
      const postOrderItemData = await this.orderItemService.orderItem(
        item_id,
        amount
      );

      return res.status(201).json({
        message: '상품 발주에 성공하였습니다.',
        data: postOrderItemData,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: '상품 발주에 실패하였습니다.' });
    }
  };

  updateOrder = async (req, res) => {
    try {
      const { item_id, order_id } = req.params;
      const { state } = req.body;
      const updateOrderData = await this.orderItemService.updateOrder(
        order_id,
        item_id,
        state
      );

      return res.status(200).json({
        message: '발주 수정에 성공하였습니다.',
        data: updateOrderData,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: '발주 수정에 실패하였습니다.' });
    }
  };
}

module.exports = OrderItemController;
