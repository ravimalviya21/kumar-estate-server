const jsonWebToken = require('jsonwebtoken');
require('dotenv').config();


exports.generateToken = async (body) => {
    console.log("body", body)
    try {
        const accessToken = await jsonWebToken.sign(body, process.env.SECRET_KEY, {
            expiresIn: "5m"
        })

        const refreshToken = await jsonWebToken.sign(body, process.env.SECRET_KEY, {
            expiresIn: "24h"
        })

        return Promise.resolve({ accessToken, refreshToken });
    } catch (error) {
        return Promise.reject({ error: error })
    }
}