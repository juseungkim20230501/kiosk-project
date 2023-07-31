const { OrderItem } = require('../models');

class OrderItemRepository {
  orderItem = async (item_id, amount) => {
    const postOrderItemData = await OrderItem.create({
      item_id,
      amount,
    });

    return postOrderItemData;
  };

  updateOrder = async (order_id, item_id, state) => {
    const updateOrderData = await OrderItem.update(
      { state },
      { where: { item_id, id: order_id } }
    );

    return updateOrderData;
  };

  findOrder = async (item_id, order_id) => {
    const findOrderData = await OrderItem.findOne({
      where: { item_id, id: order_id },
    });

    return findOrderData;
  };
}

module.exports = OrderItemRepository;
