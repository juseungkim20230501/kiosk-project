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

  getItemsByType = async (type) => {
    const getItemsByTypeData = await Item.findAll({ where: { type } });

    return getItemsByTypeData;
  };
}

module.exports = ItemRepository;
