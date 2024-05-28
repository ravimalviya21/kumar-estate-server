const UserModel = require('../models/auth.model');
const bcrypt = require('bcrypt');
const generateToken = require('./../services/auth.token');
require('dotenv').config();


// Controller to register a new user
exports.register = async (req, res) => {
    const { username, email, avatar, password } = req.body;
    if (!username || !email || !password) {
        res.status(400).json({
            status: 400,
            message: "All fields are mandatory"
        })
        return
    }

    const isUserExist = await UserModel.findOne({ username: username });

    if (isUserExist) return res.status(401).json({ status: 401, message: "User already exist" });

    const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT));

    const tokens = await generateToken.generateToken({ username, email, password });

    const result = await new UserModel({
        username,
        email,
        password: hashedPassword,
        token: tokens.refreshToken
    })

    const confirmation = await result.save();

    res.status(200).json({
        status: 200,
        User: confirmation._doc,
        message: "User registered successfully"
    })
}


exports.login = (req, res) => {
    //
}