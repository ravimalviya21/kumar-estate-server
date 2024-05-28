const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const DbConnection = require('./config/db');
const userRoute  = require('./src/routes/user.route');
DbConnection.DbConnection();



const PORT = process.env.PORT || 3005;  // Port we are using

app.use(express.json({limit : "50mb"}));
app.use(express.urlencoded({limit : "50mb", extended : true}));
app.use(cors({origin : "*"}))
app.listen(PORT, () => {
    console.log(`We are running on ${PORT}`);
})
app.use('/api/user', userRoute);