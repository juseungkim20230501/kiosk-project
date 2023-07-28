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

  deleteItem = async (id) => {
    const deleteItemData = await Item.destroy({ where: { id } });

    return deleteItemData;
  };

  checkAmount = async (id) => {
    const checkAmountData = await Item.findByPk(id);

    return checkAmountData;
  };

  updateItem = async (id, name, price) => {
    const updateItemData = await Item.update(
      { name, price },
      { where: { id } }
    );

    return updateItemData;
  };
}

module.exports = ItemRepository;
