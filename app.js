const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
const home = require('./routes/home')
const autocare = require('./routes/autocare')
const user = require('./routes/user')
const admin = require('./routes/admin')
const session = require('express-session')
const checklogin = require('./helpers/logintrue')
const checkemail = require('./helpers/emailUnique')

app.locals.checklogin = checklogin
app.locals.checkemail = checkemail
app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.use('/user', express.static('public'))
app.use('/user/:id/1', express.static('public'))
app.use('/user/:id/2', express.static('public'))
app.use('/user/:id/3', express.static('public'))
app.use('/user/:id/4', express.static('public'))

app.use(session({
    secret: 'alfred already',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

const middleware = (req, res, next) => {
    if (req.session.login) {
        next()
    } else {
        res.redirect('/')
    }
}

app.use('/', home)
app.use(middleware)
app.use('/user', user)
app.use('/admin',admin)
app.use('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
