const sequelize = require("sequelize");
const db = require("../util/database");
const User = require("./user");

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
    type: sequelize.FLOAT,
    allowNull: false,
  },
  total: {
    type: sequelize.FLOAT,
    allowNull: false,
  },
  status: {
    type: sequelize.STRING,
    allowNull: false,
  },
  distance_from_store: {
    type: sequelize.FLOAT,
    allowNull: false,
  },
  shipping_address: {
    type: sequelize.STRING,
    allowNull: false,
  },
});

Order.associate = (models) => {
  Order.belongsTo(models.user, {
    foreignKey: "order_id",
    as: "orders",
  });
};

module.exports = Order;
