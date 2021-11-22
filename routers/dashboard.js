const HomeController = require('../controllers/homeController');
const { Users } = require('../models')

const router = require('express').Router()

router.get('/dashboard', (req, res) => {
    Users.findAll()
    .then(users => {
        res.render('dashboard', {users})
    })
})

module.exports = router