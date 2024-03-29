'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.OrderItem, {
        foreignKey: 'item_id',
        onDelete: 'CASCADE',
      });

      this.belongsTo(models.Option, {
        foreignKey: 'option_id',
      });

      this.hasMany(models.ItemOrderCustomer, {
        foreignKey: 'item_id',
        onDelete: 'CASCADE',
      });
    }
  }
  Item.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      option_id: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
      },
      price: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM('coffee', 'juice', 'food'),
        allowNull: false,
      },
      amount: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: 'items',
      modelName: 'Item',
    }
  );
  return Item;
};
