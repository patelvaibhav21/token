const express = require('express')
const app = express()


// i am add in newbranch

// import all controller and middleware
const { validate_field } = require('./middleware/validation')
const { verify_token } = require('./middleware/verify')
const { loggedIn,register,profile,user_delete } = require('./controller//all_handler')
const {User}=require('./database/database')
const{send_email}=require('./controller/send_email')
//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.post('/register', register)
app.post('/login', loggedIn)
app.post('/verify', verify_token)
app.get('/profile', verify_token, profile)
app.post('/send_email',send_email)
app.post('/delete',user_delete)

app.listen(4000, () => {
    console.log('Server running on 4000 .........')
})
