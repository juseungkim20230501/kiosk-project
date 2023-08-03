const OrderCustomerService = require('../services/order_customer.service');

class OrderCustomerController {
  orderCustomerService = new OrderCustomerService();

  orderCustomer = async (req, res) => {
    try {
      const orderCustomerData = await this.orderCustomerService.orderCustomer();

      return res.status(201).json({ data: orderCustomerData });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ errorMessage: '주문정보 생성에 실패하였습니다.' });
    }
  };

  updateOrderCustomer = async (req, res) => {
    try {
      const { order_customer_id, item_id } = req.params;
      const { state } = req.body;

      const updateOrderCustomerData =
        await this.orderCustomerService.updateOrderCustomer(
          order_customer_id,
          item_id,
          state
        );

      return res.status(200).json({
        message: '주문 정보를 수정하였습니다.',
        data: updateOrderCustomerData,
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ errorMessage: '주문 정보 수정에 실패하였습니다.' });
    }
  };

  deleteOrderCustomer = async (req, res) => {
    try {
      const { order_customer_id } = req.params;

      const deleteOrderCustomerData =
        await this.orderCustomerService.deleteOrderCustomer(order_customer_id);

      return res.status(200).json({
        message: '주문을 취소하였습니다.',
        data: deleteOrderCustomerData,
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ errorMessage: '주문 취소에 실패하였습니다.' });
    }
  };
}

module.exports = OrderCustomerController;
