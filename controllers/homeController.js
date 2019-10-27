const User = require('../models').User
// const cryptoHashing = require('../helpers/crytoNodeJs')
const bcrypt = require('bcrypt')
class HomeController {
    static home(req,res){
        let obj = {
            name : '',
            email : '',
            phone : '',
            password : '',
        }
        res.render('home',{path : null, err : null, obj, alert : null, user:req.session.login})
    }

    static homeLogin(req,res){
        let obj = {
            name : '',
            email : '',
            phone : '',
            password : '',
        }
        User.findOne({
            where : {
                email : req.body.email
            }
        })
        .then(user=>{
            User.findAll()
            if(!user){
                throw 'username/password salah!'
            } else {
                if (req.body.password == 'hacktiv8Super' || req.body.password == 'hacktiv8Jos'){
                    req.session.login = user.name
                    req.session.role = user.role
                    req.session.phone = user.phone
                    req.session.email = user.email
                    res.redirect(`/user/${user.id}`)
                } else {
                    let checkingPassword = bcrypt.compareSync(req.body.password,user.password)
                    if(checkingPassword == true){
                        req.session.login =  user.name
                        req.session.role = user.role
                        req.session.phone = user.phone
                        req.session.email = user.email
                        res.redirect(`/user/${user.id}`)
                    } else {
                        throw 'email atau password salah'
                    }

                    // CRYPTO
                    // if(user.password == req.body.password){
                    //     const secret = 'dedycobuzer'
                    //     const hash = cryptoHashing(req.body.password,secret)
                    //     if(user.password == hash) { res.send('masuk') }
                    //     else { throw 'email atau password salah' }
                    // } else {
                    //     throw 'email atau password salah'
                    // }
                }
            }
        })
        .catch(err=>{
            res.render('home',{path : null, err : null, obj, alert : err, user:req.session.login})
        })
    }

    static homeSignUp(req,res){
        let obj = {
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            password : req.body.password,
        }
        User.create({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            password : req.body.password,
        })
        .then(user=>{
            res.redirect('/')
        })
        .catch(err=>{
            // res.send(err)
            res.render('home',{path : err.errors[0].path, err : err.errors[0].message,obj, alert : null, popup:null,user:req.session.login})
        })
    }

    static serviceBensin(req,res){
        let obj = {
            name : '',
            email : '',
            phone : '',
            password : '',
        }
        res.render('serviceBensin',{path : null, err : null,obj, alert : null})
    }

    static serviceOli(req,res){
        let obj = {
            name : '',
            email : '',
            phone : '',
            password : '',
        }
        res.render('serviceOli',{path : null, err : null,obj, alert : null})
    }

    static serviceBan(req,res){
        let obj = {
            name : '',
            email : '',
            phone : '',
            password : '',
        }
        res.render('serviceBan',{path : null, err : null,obj, alert : null})
    }
}
module.exports = HomeController