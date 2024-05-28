const UserModel = require('../models/auth.model');
const bcrypt  = require('bcrypt');

exports.register = async (req, res) => {
    const { username, email, avatar, password } = req.body;
    if (!username || !email || !password) {

        const isUserExist  = await UserModel.findOne({username : username});

        if(isUserExist) return res.status(401).json({status : 401, message : "User already exist"});

        res.status(400).json({
            status: 400,
            message: "All fields are mandatory"
        })
        return
    }
    res.status(200).json({
        status: 200,
        message : "Successfull"
    })
}


exports.login = (req, res) => {
    //
}