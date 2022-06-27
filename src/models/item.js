const sequelize = require("sequelize");
const db = require("../util/database");
const Order = require("./order");

const Item = db.define("item", {
  name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: sequelize.STRING,
    allowNull: false,
  },
  quantity: {
    type: sequelize.STRING,
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
    through: 'order_items',
    as: 'order',
    foreignKey: 'item_id'
  })
}

module.exports = Item;
