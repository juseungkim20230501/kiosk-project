const ItemRepository = require('../repositories/item.repository');
const { Item } = require('../models');

class ItemService {
  itemRepository = new ItemRepository();

  createItem = async (name, option_id, price, type, amount) => {
    if (!name || !price) {
      throw new Error('상품명, 가격을 입력해주세요.');
    }

    const validTypes = ['coffee', 'juice', 'food'];
    if (!validTypes.includes(type)) {
      throw new Error('알맞은 타입을 입력해주세요.');
    }

    const createItemData = await this.itemRepository.createItem({
      name,
      option_id,
      price,
      type,
      amount,
    });

    return createItemData;
  };

  getItem = async () => {
    const getItemData = await this.itemRepository.getItem();

    return getItemData;
  };
}

module.exports = ItemService;
