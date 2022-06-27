const Order = require("../models/order");

const makeOrder = async (req, res, next) => {
  try {
    if (req.body.distance_from_store >= 10) {
      req.body.shipment = 30;
    } else {
      req.body.shipment = 20;
    }
    data = {
      shipment: req.body.shipment,
      subtotal: req.body.subtotal,
      total: req.body.shipment + req.body.subtotal,
      status: "new",
      distance_from_store: req.body.distance_from_store,
      shipping_address: req.body.shipping_address,
      userId: req.body.userId,
    };
    const createdOrder = await Order.create(data)
    return res
      .status(200)
      .json({ message: "Order Created Successfully", createdOrder });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

const getOrder = async (req, res, next) => {
  let id = req.params.id
  try {
    if (!id) {
      return res.status(404).json({
        error: {
          message: 'Order does not exist'
        }
      })
    }
    const loadedOrder = await Order.findOne({ where: id })
  } catch (error) {

  }
}

module.exports = {
  makeOrder,
};
