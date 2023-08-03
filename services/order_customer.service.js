const OrderCustomerRepository = require('../repositories/order_customer.repository');
const ItemOrderCustomerRepository = require('../repositories/item_order_customer.repository');
const ItemRepository = require('../repositories/item.repository');
const { sequelize } = require('../models');

class OrderCustomerService {
  orderCustomerRepository = new OrderCustomerRepository();
  itemOrderCustomerRepository = new ItemOrderCustomerRepository();
  itemRepository = new ItemRepository();

  orderCustomer = async () => {
    const orderCustomerData = await this.orderCustomerRepository.orderCustomer(
      {}
    );

    return orderCustomerData;
  };

  updateOrderCustomer = async (order_customer_id, item_id, state) => {
    const findItemOrderCustomerData =
      await this.itemOrderCustomerRepository.findItemOrderCustomer(
        order_customer_id
      );

    const findItemData = await this.itemRepository.findItem(item_id);

    if (state === true) {
      const t = await sequelize.transaction();
      try {
        const updateOrderCustomerData =
          await this.orderCustomerRepository.updateOrderCustomer(
            order_customer_id,
            state,
            { transaction: t }
          );

        const amountToSubtract = findItemOrderCustomerData.amount;
        await findItemData.decrement('amount', {
          by: amountToSubtract,
          transaction: t,
        });
        await t.commit();

        return updateOrderCustomerData;
      } catch (error) {
        await t.rollback();
        throw error;
      }
    }
  };

  deleteOrderCustomer = async (order_customer_id) => {
    const findOrderCustomerData =
      await this.orderCustomerRepository.findOrderCustomer(order_customer_id);

    if (findOrderCustomerData.state === true) {
      throw new Error('완료된 주문은 취소할 수 없습니다.');
    } else {
      const t = sequelize.transaction();

      try {
        const deleteOrderCustomerData =
          await this.orderCustomerRepository.deleteOrderCustomer(
            order_customer_id,
            { transaction: t }
          );

        const deleteItemOrderCustomerData =
          await this.itemOrderCustomerRepository.deleteItemOrderCustomer(
            order_customer_id,
            { transaction: t }
          );
        await t.commit();

        return deleteOrderCustomerData, deleteItemOrderCustomerData;
      } catch (error) {
        await t.rollback();
        throw error;
      }
    }
  };
}

module.exports = OrderCustomerService;
