'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  order_history.init({
    customer_id: DataTypes.INTEGER,
    inventory_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    purchase_date: DataTypes.DATE,
    shipped: DataTypes.BOOLEAN,
    quantity: DataTypes.INTEGER,
    product_price: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'order_history',
  });
  return order_history;
};