const sequelize = require("sequelize");
const db = require("../util/database");

const Item = db.define("item", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
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

module.exports = Item;
