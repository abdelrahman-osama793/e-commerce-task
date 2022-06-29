const express = require("express");
const { createProduct } = require("../controllers/item");
const router = express.Router();

router.post("/add-item", createProduct);

module.exports = router;
