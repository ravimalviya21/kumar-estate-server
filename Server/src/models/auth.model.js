const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    username : {
        type : String,
        unique : true,
        required : [true, "Please provide a username"],
        minLength : [2, "Oops! username is too short"],
        maxLength : [15, "Oops! username is too long"],
        trim : true
    },
    email : {
        type : String,
        unique : true,
        required : [true, "Email is required"]
    },
    avatar : {
        type : String,
        required : false
    }
},{
    timestamps : true
})

const User = new mongoose.model('User', UserModel);

module.exports = User;