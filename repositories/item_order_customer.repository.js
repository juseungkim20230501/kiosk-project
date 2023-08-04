const { ItemOrderCustomer } = require('../models');

class ItemOrderCustomerRepository {
  itemOrderCustomer = async (
    item_id,
    order_customer_id,
    amount,
    option,
    price
  ) => {
    const itemOrderCustomerData = await ItemOrderCustomer.create({
      item_id,
      order_customer_id,
      amount,
      option,
      price,
    });

    return itemOrderCustomerData;
  };

  optionItemOrderCustomer = async (
    item_id,
    order_customer_id,
    amount,
    option,
    sumPrice
  ) => {
    const itemOrderCustomerData = await ItemOrderCustomer.create({
      item_id,
      order_customer_id,
      amount,
      option,
      price: sumPrice,
    });

    return itemOrderCustomerData;
  };

  deleteItemOrderCustomer = async (order_customer_id) => {
    const deleteItemOrderCustomerData = await ItemOrderCustomer.destroy({
      where: { order_customer_id },
    });

    return deleteItemOrderCustomerData;
  };

  findItemOrderCustomer = async (order_customer_id) => {
    const findItemOrderCustomerData = await ItemOrderCustomer.findOne({
      where: { order_customer_id },
    });

    return findItemOrderCustomerData;
  };
}

module.exports = ItemOrderCustomerRepository;
