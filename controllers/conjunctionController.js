const UserServiceMechanic = require('../models').UserServiceMechanic
const User = require('../models').User
const Service = require('../models').Service
const Mechanic = require('../models').Mechanic

class UserServiceMechanicController {
    static findAll(req,res){
        let obj = {
            name : '',
            email : '',
            phone : '',
            password : '',
        }
        UserServiceMechanic.findAll({
            include : [User,Service,Mechanic],
            order : [['id','desc']]
        })
        .then(data=>{
            res.render('userHome',{data : data, path : null, err : null,obj, alert : null,UserServiceMechanic})
        })    
        .catch(err=>{
            res.send(err)
        })
    }
    static destroy(req,res){
        // res.send(req.params.id)
        UserServiceMechanic.destroy({
            where : {
                id : req.params.id
            }
        })
        .then(()=>{
            res.redirect('/admin')
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static done(req,res){
        UserServiceMechanic.update({
            status : true
        },{
            where : {
                id : req.params.id
            }
        })
        .then(()=>{
            res.redirect('/admin')
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static process(req,res){
        UserServiceMechanic.update({
            status : false
        },{
            where : {
                id : req.params.id
            }
        })
        .then(()=>{
            res.redirect('/admin')
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static filter(req,res){
        let obj = {
            name : '',
            email : '',
            phone : '',
            password : '',
        }
        UserServiceMechanic.findAll(
            {include : [User,Service,Mechanic],
            order : [['schedule']],
            where: {
                schedule : req.body.date
            }
        })
        .then(data=>{
            res.render('userHome',{data : data, path : null, err : null,obj, alert : null,UserServiceMechanic})
        })
    }
}
module.exports = UserServiceMechanicController