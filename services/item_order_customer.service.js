const ItemOrderCustomerRepository = require('../repositories/item_order_customer.repository');

class ItemOrderCustomerService {
  itemOrderCustomerRepository = new ItemOrderCustomerRepository();

  itemOrderCustomer = async (
    item_id,
    order_customer_id,
    amount,
    option,
    price
  ) => {
    const itemOrderCustomerData =
      await this.itemOrderCustomerRepository.itemOrderCustomer(
        item_id,
        order_customer_id,
        amount,
        option,
        price
      );

    return itemOrderCustomerData;
  };
}

module.exports = ItemOrderCustomerService;
