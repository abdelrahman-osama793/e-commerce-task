const sequelize = require("sequelize");
const db = require("../util/database");
const Item = require("./item");
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
  userId: {
    type: sequelize.INTEGER,
    references: {
      model: User,
      key: "id"
    }
  }
});

Order.associate = (models) => {
  Order.belongsToMany(Item, {
    through: 'order_items',
    foreignKey: 'order_id'
  })
}

Order.associate = (models) => {
  Order.belongsTo(models.user, {
    foreignKey: "orderId",
  });
};

module.exports = Order;
