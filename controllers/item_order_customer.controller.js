const ItemOrderCustomerService = require('../services/item_order_customer.service');

class ItemOrderCustomerController {
  itemOrderCustomerService = new ItemOrderCustomerService();

  itemOrderCustomer = async (req, res) => {
    const { item_id, order_customer_id } = req.params;
    const { amount, option } = req.body;

    const itemOrderCustomerData =
      await this.itemOrderCustomerService.itemOrderCustomer(
        item_id,
        order_customer_id,
        amount,
        option
      );

    return itemOrderCustomerData;
  };
}

module.exports = ItemOrderCustomerController;
