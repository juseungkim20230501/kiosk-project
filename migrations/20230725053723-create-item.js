'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      option_id: {
        type: Sequelize.BIGINT,
        defaultValue: 0,
      },
      price: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      type: {
        type: Sequelize.ENUM('coffee', 'juice', 'food'),
        allowNull: false,
      },
      amount: {
        type: Sequelize.BIGINT,
        defaultValue: 0,
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
    await queryInterface.dropTable('items');
  },
};
