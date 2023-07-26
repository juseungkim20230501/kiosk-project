const { Item } = require('../models');

class ItemRepository {
  createItem = async ({ name, option_id, price, type, amount }) => {
    const createItemData = await Item.create({
      name,
      option_id,
      price,
      type,
      amount,
    });

    return createItemData;
  };

  getItem = async () => {
    const getItemData = await Item.findAll();

    return getItemData;
  };
}

module.exports = ItemRepository;
