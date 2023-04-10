const { connection } = require('../database/database')


const validate_field = (req, res, next) => {
    const { username, password } = req.body
    if (username.length < 5) {
        res.json([{
            message: 'Enter valid username'
        }])
    } else {
        connection.query(`SELECT username FROM user_data WHERE username=?`, username, (error, result) => {
            if (error) throw error
            if (result.length != 0) {
                res.json({ message: 'username already taken' })
            } else {
                next()
            }
        })
    }
}


module.exports = { validate_field }