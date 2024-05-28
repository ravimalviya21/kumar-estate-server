const mongoose = require('mongoose');
require('dotenv').config();

exports.DbConnection = () => { mongoose.connect(process.env.DB).then(() => console.log("DB Connected")).catch((error) => console.log(error, "error"))}