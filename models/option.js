'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Item, {
        foreignKey: 'option_id',
        onDelete: 'CASCADE',
      });
    }
  }
  Option.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      extra_price: {
        type: DataTypes.BIGINT,
      },
      shot_price: {
        type: DataTypes.BIGINT,
      },
      hot: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      tableName: 'options',
      modelName: 'Option',
    }
  );
  return Option;
};
