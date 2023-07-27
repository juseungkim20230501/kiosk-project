const ItemRepository = require('../repositories/item.repository');
const validTypes = ['coffee', 'juice', 'food'];

class ItemService {
  itemRepository = new ItemRepository();

  createItem = async (name, option_id, price, type, amount) => {
    if (!name || !price) {
      throw new Error('상품명, 가격을 입력해주세요.');
    }

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

  getItemsByType = async (type) => {
    const getItemsByTypeData = await this.itemRepository.getItemsByType(type);

    return getItemsByTypeData;
  };

  deleteItem = async (id) => {
    const item = await this.itemRepository.checkAmount(id);

    if (item.amount > 0) {
      return { message: '현재 수량이 남아있습니다. 삭제하시겠습니까?' };
    } else {
      await this.itemRepository.deleteItem(id);
      return { message: '상품이 삭제 되었습니다.' };
    }
  };

  deleteConfirm = async (id, answer) => {
    if (answer === '예') {
      await this.itemRepository.deleteItem(id);
      return { message: '상품이 삭제되었습니다.' };
    } else {
      return { message: '상품 삭제를 취소하였습니다.' };
    }
  };
}

module.exports = ItemService;
