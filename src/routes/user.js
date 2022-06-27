const express = require("express");
const router = express.Router();
const { signUpUser, getAllUsers, loginUser, getProfileWithOrdersAndCount } = require("../controllers/user");


router.post("/signup", signUpUser);
router.post('/login', loginUser)
router.get("/get-all-users", getAllUsers)
router.get("/me/:id", getProfileWithOrdersAndCount)

module.exports = router;
