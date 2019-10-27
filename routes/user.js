const express = require('express')
const router = express.Router()
const app = express()
const UserServiceMechanic = require('../models').UserServiceMechanic
const User = require('../models').User
const Service = require('../models').Service
const Mechanic = require('../models').Mechanic
const nodeMail = require('../helpers/htmlEmail')
// const hbs = require('nodemailer-express-handlebars')      
app.use(express.static("public"));

router.get('/:id', (req, res) => {
    let obj = {
        name: '',
        email: '',
        phone: '',
        password: '',
    }
    Service.findAll({
            include: [User, Mechanic],
            order: [
                ['id']
            ]
        })
        .then(service => {
            if (req.session.role == 'owner') {
                res.redirect('/admin')
            } else if (req.session.role == 'customer') {
                res.render('homeuser', {
                    path: null,
                    err: null,
                    obj,
                    alert: null,
                    user: req.session.login,
                    user: req.params.id
                })
            }
        })
        .catch(err => {
            res.send(err)
        })
})

router.get('/:id/1', (req, res) => {
    let obj = {
        name: '',
        email: '',
        phone: '',
        password: '',
    }
    Service.findAll({
            include: [User, Mechanic],
            order: [
                ['id']
            ]
        })
        .then(service => {
            res.render('servicebensin', {
                path: null,
                err: null,
                obj,
                alert: null,
                user: req.session.login,
                user: req.params.id
            })
        })
        .catch(err => {
            res.send(err)
        })
})

router.post('/:id/1', (req, res) => {
    UserServiceMechanic.create({
            UserId: req.params.id,
            ServiceId: 1,
            MechanicId: 0,
            status: false,
            schedule: req.body.date,
            hour: 0,
            serviceDetail: req.body.service
        })
        .then((user) => {
            Mechanic.findAll()
                .then(mekanik=>{{
                    mekanik.forEach(data=>{
                        if(data.serviceId == user.ServiceId){
                            UserServiceMechanic.update({
                                MechanicId : data.id
                            },{
                                where : {
                                    id : user.id 
                                }
                            })
                            .then(()=>{
                                nodeMail(req.session.email)
                                res.redirect(`/user/${req.params.id}`)
                            })
                        }
                    })
                }})
        })
        .catch(err => {
            res.send('gagal')
        })
})

router.get('/:id/2', (req, res) => {
    let obj = {
        name: '',
        email: '',
        phone: '',
        password: '',
    }
    Service.findAll({
            include: [User, Mechanic],
            order: [
                ['id']
            ]
        })
        .then(service => {
            res.render('serviceoli', {
                path: null,
                err: null,
                obj,
                alert: null,
                user: req.session.login,
                user: req.params.id
            })
        })
        .catch(err => {
            res.send(err)
        })
})

router.post('/:id/2', (req, res) => {
    UserServiceMechanic.create({
            UserId: req.params.id,
            ServiceId: 2,
            MechanicId: 0,
            status: false,
            schedule: req.body.date,
            hour: 0,
            serviceDetail: req.body.service
        })
        .then(user => {
            Mechanic.findAll()
                .then(mekanik=>{{
                    mekanik.forEach(data=>{
                        if(data.serviceId == user.ServiceId){
                            UserServiceMechanic.update({
                                MechanicId : data.id
                            },{
                                where : {
                                    id : user.id 
                                }
                            })
                            .then(()=>{
                                nodeMail(req.session.email)
                                res.redirect(`/user/${req.params.id}`)
                            })
                        }
                    })
                }})
        })
        .catch(err => {
            res.send(err)
        })
})

router.get('/:id/3', (req, res) => {
    let obj = {
        name: '',
        email: '',
        phone: '',
        password: '',
    }
    Service.findAll({
            include: [User, Mechanic],
            order: [
                ['id']
            ]
        })
        .then(service => {
            res.render('serviceban', {
                path: null,
                err: null,
                obj,
                alert: null,
                user: req.session.login,
                user: req.params.id
            })
        })
        .catch(err => {
            res.send(err)
        })
})

router.post('/:id/3', (req, res) => {
    UserServiceMechanic.create({
            UserId: req.params.id,
            ServiceId: 3,
            MechanicId: 0,
            status: false,
            schedule: req.body.date,
            hour: 0,
            serviceDetail: req.body.service
        })
        .then(user => {
            Mechanic.findAll()
                .then(mekanik=>{{
                    mekanik.forEach(data=>{
                        if(data.serviceId == user.ServiceId){
                            UserServiceMechanic.update({
                                MechanicId : data.id
                            },{
                                where : {
                                    id : user.id 
                                }
                            })
                            .then(()=>{
                                nodeMail(req.session.email)
                                res.redirect(`/user/${req.params.id}`)
                            })
                        }
                    })
                }})
        })
        .catch(err => {
            res.send(err)
        })
})

router.get('/:id/4', (req, res) => {
    let obj = {
        name: '',
        email: '',
        phone: '',
        password: '',
    }
    Service.findAll({
            include: [User, Mechanic],
            order: [
                ['id']
            ]
        })
        .then(service => {
            res.render('serviceAutoCare', {
                path: null,
                err: null,
                obj,
                alert: null,
                user: req.session.login,
                user: req.params.id
            })
        })
        .catch(err => {
            res.send(err)
        })
})

router.post('/:id/4', (req, res) => {
    UserServiceMechanic.create({
            UserId: req.params.id,
            ServiceId: 4,
            MechanicId: 0,
            status: false,
            schedule: req.body.date,
            hour: 0,
            serviceDetail: req.body.service
        })
        .then(user => {
            Mechanic.findAll()
                .then(mekanik=>{{
                    mekanik.forEach(data=>{
                        if(data.serviceId == user.ServiceId){
                            UserServiceMechanic.update({
                                MechanicId : data.id
                            },{
                                where : {
                                    id : user.id 
                                }
                            })
                            .then(()=>{
                                nodeMail(req.session.email)
                                res.redirect(`/user/${req.params.id}`)
                            })
                        }
                    })
                }})
        })
        .catch(err => {
            res.send(err)
        })
})

module.exports = router
