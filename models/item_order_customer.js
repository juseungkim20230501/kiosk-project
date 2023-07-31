'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemOrderCustomer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Item, {
        foreignKey: 'item_id',
      });

      this.belongsTo(models.OrderCustomer, {
        foreignKey: 'order_customer_id',
      });
    }
  }
  ItemOrderCustomer.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      item_id: {
        allowNull: false,
        type: DataTypes.BIGINT,
      },
      order_customer_id: {
        allowNull: false,
        type: DataTypes.BIGINT,
      },
      amount: {
        allowNull: false,
        type: DataTypes.BIGINT,
      },
      option: {
        allowNull: false,
        type: DataTypes.JSON,
      },
      price: {
        allowNull: false,
        type: DataTypes.BIGINT,
      },
    },
    {
      sequelize,
      tableName: 'item_order_customers',
      modelName: 'ItemOrderCustomer',
    }
  );
  return ItemOrderCustomer;
};
