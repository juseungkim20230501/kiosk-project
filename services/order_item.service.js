const OrderItemRepository = require('../repositories/order_item.repository');
const ItemRepository = require('../repositories/item.repository');
const { sequelize } = require('../models');

const orderItemState = {
  ORDERED: 0,
  PENDING: 1,
  COMPLETED: 2,
  CANCELED: 3,
};

class OrderItemService {
  orderItemRepository = new OrderItemRepository();
  itemRepository = new ItemRepository();

  orderItem = async (item_id, amount) => {
    const postOrderItemData = await this.orderItemRepository.orderItem(
      item_id,
      amount
    );

    return postOrderItemData;
  };

  updateOrder = async (order_id, item_id, state) => {
      const findOrderData = await this.orderItemRepository.findOrder(
        item_id,
        order_id
      );
      const id = item_id;
      const itemAmount = await this.itemRepository.checkAmount(id);
      if (
        findOrderData.state === orderItemState.ORDERED &&
        state === orderItemState.PENDING
      ) {
        const updateOrderData = await this.orderItemRepository.updateOrder(
          order_id,
          item_id,
          state
        );

        return updateOrderData;
      }

      if (
        (findOrderData.state === orderItemState.ORDERED ||
          findOrderData.state === orderItemState.PENDING) &&
        state === orderItemState.CANCELED
      ) {
        // 주문 상태가 ORDERED 또는 PENDING 이고, 취소 상태로 변경할 경우
        return this.orderItemRepository.updateOrder(order_id, item_id, state);
      }

      // 주문 상태가 PENDING인 경우
      if (findOrderData.state === orderItemState.PENDING) {
        // 주문 상태를 COMPLETED로 변경할 경우
        if (state === orderItemState.COMPLETED) {
          const t = await sequelize.transaction();
          try {
            const updateOrderData = await this.orderItemRepository.updateOrder(
              order_id,
              item_id,
              state,
              { transaction: t }
            );

            const amountToAdd = findOrderData.amount;
            // 아이템의 수량을 증가시킴
            await itemAmount.increment('amount', {
              by: amountToAdd,
              transaction: t,
            });
            await t.commit();

            return updateOrderData;
          } catch (error) {
            await t.rollback();
            throw error;
          }
        }
      }

      // 주문 상태가 COMPLETED이고, ORDERED 또는 PENDING 또는 CANCELED로 변경할 경우
      if (
        findOrderData.state === orderItemState.COMPLETED &&
        (state === orderItemState.ORDERED ||
          state === orderItemState.PENDING ||
          state === orderItemState.CANCELED)
      ) {
        // 주문 취소 시 아이템의 수량이 발주 수량보다 적은 경우 에러 발생
        if (findOrderData.amount > itemAmount.amount) {
          throw new Error(
            '현재 수량이 발주 수량보다 적어 발주 취소가 불가능합니다.'
          );
        } else {
          const t = await sequelize.transaction();
          try {
            const updateOrderData = await this.orderItemRepository.updateOrder(
              order_id,
              item_id,
              state,
              { transaction: t }
            );

            const amountToSubtract = findOrderData.amount;
            // 아이템의 수량을 감소시킴
            await itemAmount.decrement('amount', {
              by: amountToSubtract,
              transaction: t,
            });
            await t.commit();

            return updateOrderData;
          } catch (error) {
            await t.rollback();
            throw error;
          }
        }
      }
      // 잘못된 상태 변경 요청인 경우
      throw new Error('잘못된 상태 변경 요청입니다.');
  };
}

module.exports = OrderItemService;
