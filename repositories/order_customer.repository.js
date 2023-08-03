const { where } = require('sequelize');
const { OrderCustomer } = require('../models');

class OrderCustomerRepository {
  orderCustomer = async ({}) => {
    const orderCustomerData = await OrderCustomer.create({});

    return orderCustomerData;
  };

  updateOrderCustomer = async (order_customer_id, state) => {
    const updateOrderCustomerData = await OrderCustomer.update(
      { state },
      { where: { id: order_customer_id } }
    );

    return updateOrderCustomerData;
  };

  deleteOrderCustomer = async (order_customer_id) => {
    const deleteOrderCustomerData = await OrderCustomer.destroy({
      where: { id: order_customer_id },
    });

    return deleteOrderCustomerData;
  };

  findOrderCustomer = async (order_customer_id) => {
    const findOrderCustomerData = await OrderCustomer.findOne({
      where: { id: order_customer_id },
    });

    return findOrderCustomerData;
  };
}

module.exports = OrderCustomerRepository;
