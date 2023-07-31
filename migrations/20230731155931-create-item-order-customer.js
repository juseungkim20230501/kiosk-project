'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('item_order_customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      item_id: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      order_customer_id: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      amount: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      option: {
        allowNull: false,
        type: Sequelize.JSON,
      },
      price: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('item_order_customers');
  },
};
