const jwt = require('jsonwebtoken')

const verify_token = async (req, res, next) => {
    try {
``
        const token   = req.headers.authorization.split(' ')//token
        console.log(token)
        const data = await jwt.verify(token[1], 'key')
        console.log(data)
        res.status(200).json({ message: 'Verified' })
        // next()
    } catch (err) {
        console.log(err)
        res.json({ message: 'not valid token' })
    }
}
module.exports = { verify_token }