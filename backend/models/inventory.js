'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  inventory.init({
    id: DataTypes.INTEGER,
    product_name: DataTypes.STRING,
    description: DataTypes.STRING,
    product_photo: DataTypes.BLOB,
    price: DataTypes.DOUBLE,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'inventory',
  });
  return inventory;
};