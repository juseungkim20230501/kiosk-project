const ItemOrderCustomerRepository = require('../repositories/item_order_customer.repository');
const ItemRepository = require('../repositories/item.repository');
const OptionRepository = require('../repositories/option.repository');
const { json } = require('sequelize');

class ItemOrderCustomerService {
  itemOrderCustomerRepository = new ItemOrderCustomerRepository();
  itemRepository = new ItemRepository();

  itemOrderCustomer = async (item_id, order_customer_id, amount, option) => {
    const findItemData = await this.itemRepository.findItem(item_id);

    const price = findItemData.price * amount;

    if (option === 'extra') {
      const sumPrice = price + 500;

      const itemOrderCustomerData =
        await this.itemOrderCustomerRepository.optionItemOrderCustomer(
          item_id,
          order_customer_id,
          amount,
          option,
          sumPrice
        );

      return itemOrderCustomerData;
    }

    if (option === 'shot') {
      const sumPrice = price + 300;

      const itemOrderCustomerData =
        await this.itemOrderCustomerRepository.optionItemOrderCustomer(
          item_id,
          order_customer_id,
          amount,
          option,
          sumPrice
        );

      return itemOrderCustomerData;
    }

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
