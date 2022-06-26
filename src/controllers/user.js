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
        return res.status(500).json(e);
    }
}

const loginUser = async (req, res, next) => {
    try {
        const loadedUser = await User.findOne({ where: { email: req.body.email } })
        console.log(loadedUser);
        if (!loadedUser) {
            return res.status(404).json({ error: { message: 'Either email or password are wrong' } })
        }
        const comparePassword = await bcrypt.compare(req.body.password, loadedUser.password)
        if (!comparePassword) {
            return res.status(404).json({ error: { message: 'Either email or password are wrong' } })
        }
        return res.status(200).json(loadedUser)
    } catch (e) {
        console.log(e);
        return res.status(500).json(e)
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
    loginUser,
    getAllUsers
}