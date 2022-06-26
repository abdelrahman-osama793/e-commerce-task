const sequelize = require("sequelize");
const db = require("../util/database");

const Order = db.define("order", {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  shipment: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
  subtotal: {
    type: sequelize.STRING,
    allowNull: false,
  },
});


module.exports = Order;
