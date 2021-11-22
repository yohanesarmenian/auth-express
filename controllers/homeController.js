const { Users } = require('../models')

class HomeController{
    static async home(req, res){
      try {
        const users = {
          username: req.query.username,
          email: req.query.email
        }

        await Users.findAll(users)

        return res.render('home', {users})
        
      } catch(err) {

      }
    }
  }


  
module.exports = HomeController