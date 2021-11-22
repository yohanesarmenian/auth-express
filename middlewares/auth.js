const { checkToken } = require('../helpers/jwt')
const { Users } = require('../models/index')
const router = require('../routers')

//fungsi authenticate
async function authenticate(req, res, next) {
    //check token
    try {
        let token = req.cookies.auth

        let decoded = checkToken(token)

        let find = await Users.findOne({
            where: {
                username: decoded.username
            }
        })

        if(!find){
            return res.redirect('/login')
        } else {
            req.user = find
            next()
        }   
    } catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}

module.exports = {
    authenticate
}