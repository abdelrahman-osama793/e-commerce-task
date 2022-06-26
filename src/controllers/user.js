const User = require('../models/user')
const bcrypt = require('bcryptjs')

const signUpUser = async (req, res, next) => {
    try {
        const hashedPW = await bcrypt.hash(req.body.password, 8);
        const createdUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPW,
        })
        return res.status(200).json({ message: "Account Created Successfully", createdUser });
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.findAll()
        return res.status(200).json(users)
    } catch (e) {
        return res.status(500).json(e)
    }
}

module.exports = {
    signUpUser,
    getAllUsers
}