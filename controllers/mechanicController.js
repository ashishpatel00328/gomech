const Mechanic = require('../models').Mechanic

class MechanicController {

    static register(req,res){
        Mechanic.create({
            name: req.body.fullName,
            serviceId: req.body.serviceId
        })
        .then(()=>{
            res.redirect('/admin')
        })
        .catch(err=>{
            res.send(err)
        })
    }
}
module.exports = MechanicController