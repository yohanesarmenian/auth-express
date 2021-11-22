const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.SECRET_KEY

function generateToken(payload){
    const token = jwt.sign(payload, SECRET_KEY)
    return token
}

function checkToken(token){
    return jwt.verify(token, SECRET_KEY)
} //kalau sudah verify baru bisa masuk home page

module.exports = {
    generateToken,
    checkToken
}