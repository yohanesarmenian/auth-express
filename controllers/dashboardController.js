const { Users } = require('../models')

class DashboardController{
    static async dashboard(req, res){
      try {
        const users = await Users.findAll()

        return res.render('dashboard', {users})
        
      } catch(err) {

      }
    }
  }


  
module.exports = DashboardController