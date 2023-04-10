const { connection } = require('../database/database')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { User } = require('../database/models')




// Login
const loggedIn = async (req, res) => {
    const { firstname, password } = req.body
    console.log(req.body)
    const found_user = await User.findOne({ where: { firstname: firstname } })
    console.log(found_user.firstName, 'found user is here....................................')
    if (!found_user) {
        User.destroy({ where: { firstname: firstname } })
        res.json({ message: 'username or password invalid' })
    } else {
        const token = await jwt.sign({ firstname }, 'key')
        res.json({ auth: true, data: [{ token: token }] })
    }
}



//Profile
const profile = (req, res) => {
    res.json({ profile: 'profile of username' })
}



//Register
const register = async (req, res) => {
    const { firstname, password, lastname } = req.body
    console.log(req.body)
    const hashedPassword = await bcrypt.hash(password, 10)

    //Generate unique code
    const user_token = crypto.randomBytes(8).toString('hex').slice(0, 16);
    const c = User.create({
        firstName: firstname,
        lastName: lastname,
        password: password
    })
    console.log(c)
    res.json({ message: 'Registrated....' })

}
const user_delete = async (req, res) => {
    const result = await User.destroy({ where: { firstName: 'shubham321111' } })
    console.log('result of delete',result)
    res.status(200).json({ message: 'user deleted' })
}

module.exports = { register, loggedIn, profile ,user_delete}