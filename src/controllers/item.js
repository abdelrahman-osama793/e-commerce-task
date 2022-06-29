const Item = require("../models/item");

const createProduct = async (req, res, next) => {
  try {
    const createdProduct = await Item.create({
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
    });
    return res
      .status(200)
      .json({ message: "Account Created Successfully", createdProduct });
  } catch (e) {
    return res.status(500).json(e);
  }
};

module.exports = { createProduct };
