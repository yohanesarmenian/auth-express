const router = require('express').Router()
const dashboardRouter = require('./dashboard')
const authRouter = require('./auth')
const { authenticate } = require('../middlewares/auth')

router.use(authRouter)

router.use(authenticate) // req { Headers, params, query, body, user }

router.use(dashboardRouter) //berada di bawah posisi auth, maka akan dilindungi oleh auth sebelum di akses

module.exports = router