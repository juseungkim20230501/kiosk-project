const ItemOrderCustomerService = require('../services/item_order_customer.service');

class ItemOrderCustomerController {
  itemOrderCustomerService = new ItemOrderCustomerService();

  itemOrderCustomer = async (req, res) => {
    try {
      const { item_id, order_customer_id } = req.params;
      const { amount, option } = req.body;

      const itemOrderCustomerData =
        await this.itemOrderCustomerService.itemOrderCustomer(
          item_id,
          order_customer_id,
          amount,
          option
        );

      return res.status(201).json({ data: itemOrderCustomerData });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ errorMessage: '주문에 실패하였습니다.' });
    }
  };
}

module.exports = ItemOrderCustomerController;
