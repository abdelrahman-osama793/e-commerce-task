const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../models/user");
const { signUpUser, getAllUsers, loginUser } = require("../controllers/user");


router.post("/signup", signUpUser);
router.post('/login', loginUser)
router.get("/get-all-users", getAllUsers)

module.exports = router;
