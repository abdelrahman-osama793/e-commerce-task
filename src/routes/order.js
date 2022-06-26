const express = require("express");
const { makeOrder } = require("../controllers/order");
const router = express.Router();

router.post("/make-order", makeOrder);

module.exports = router