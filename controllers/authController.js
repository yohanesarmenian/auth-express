const { Users } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class AuthController{
    static async register(req, res) {
        try {
            const opt = {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }

            await Users.create(opt)

            return res.redirect('/login')
        } catch (error) {
            return res.send(error)
            
        }
    }

    static async login(req, res) {
        try {
            const opt = {
                username: req.body.username,
                password: req.body.password
            }

            const result = await Users.findOne({
                where: {
                    username: opt.username
                }
            })
            
            if(!result){
                return res.status(401).json({
                    message: 'Invalid Username or Password'
                })
            }

            const isMatch = comparePassword(opt.password, result.password)

            if(isMatch){
                //Mengirim payload JWT
                const payload = {
                    id: result.id,
                    username: result.username
                }

                const access_token = generateToken(payload)

                res.cookie('auth', access_token)
                res.redirect('/dashboard')
            } else {
                return res.status(401).json({
                    message: 'Invalid Username or Password'
                })
            }

        } catch (error) {
            return res.send(error) 
        }
    }

    static async logout(req, res) {
        try {
            res.cookie('auth', '', { maxAge: 1 })
            return res.redirect('/')
            
        } catch (error) {
            return res.send(error)
        }
    }
}

module.exports = AuthController