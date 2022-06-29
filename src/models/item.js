const sequelize = require("sequelize");
const db = require("../util/database");
const Order = require("./order");

const Item = db.define("item", {
  name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  active: {
    type: sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

Item.associate = (models) => {
  Item.belongsToMany(Order, {
    through: "order_items",
    foreignKey: "item_id",
  });
};

module.exports = Item;
