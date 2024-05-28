const mongoose = require("mongoose");


const PostModel = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        require: true,
        trim: true,
    },
    price: {
        type: Number,
        require: [true, "Price is must"],
        min: [0, "Price can not be negative or 0"]
    },
    images: [{
        type: String,
        required: true
    }],
    address: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    bedroom: {
        type: Number,
        required: true
    },
    bathroom: {
        type: Number,
        required: true
    },
    latitude: {
        type: String,
        required: true,
        trim: true
    },
    longitude: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    property: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
})

const PostDetailModel = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    description: {
        type: String,
        required: false
    },
    utilities: {
        type: String,
    },
    pet: {
        type: String,
    },
    income: {
        type: String,
    },
    size: {
        type: Number
    },
    school: {
        type: Number
    },
    bus: {
        type: Number
    },
    restaurant: {
        type: Number
    }
})

const SavedPost = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    createdAt: {
        type: new Date()
    }
})

const Chat = new mongoose.Schema({
    userId: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    },
    seenBy: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
    },
    lastMessage: {
        type: String
    },
    createdAt: {
        type: new Date()
    }
})

const Message = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    chatId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Chat"
    },
    text : {
        type : String,
    },
    createdAt : {
        type : new Date()
    }
})

const Post = new mongoose.model('Post', PostModel);
const PostDetail = new mongoose.model('PostDetail', PostDetailModel);
module.exports = { Post, PostDetail };