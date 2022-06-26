const sequelize = require("sequelize");
const db = require("../util/database");
const Item = require("./item");
const Order = require("./order");
const User = require("./user");

const Order = db.define("order_items", {
  order_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Order,
      key: "id",
    },
  },
  item_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Item,
      key: "id",
    },
  },
});

module.exports = Order;
