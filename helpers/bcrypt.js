const bcrypt = require('bcryptjs')


function hashPassword(userPassword){
    const hashedPassword = bcrypt.hashSync(userPassword, 12)

    return hashedPassword
}

function comparePassword(userPassword, dbPassword){
    return bcrypt.compareSync(userPassword, dbPassword)
}

module.exports = {
    hashPassword,
    comparePassword
} 