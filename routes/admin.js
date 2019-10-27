const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/homeController')
const ConjunctionController = require('../controllers/conjunctionController')
const MechanicController = require('../controllers/mechanicController')

router.get('/',ConjunctionController.findAll)
router.post('/',ConjunctionController.filter)
router.get('/:id/delete',ConjunctionController.destroy)
router.get('/:id/done',ConjunctionController.done)
router.get('/:id/process',ConjunctionController.process)
router.post('/register',MechanicController.register)

module.exports = router
