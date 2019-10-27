const router = require('express').Router()
const HomeController = require('../controllers/homeController')
router.get('/',HomeController.home)
router.post('/',HomeController.homeLogin)
router.get('/home',HomeController.home)
router.post('/home',HomeController.homeLogin)
router.post('/signup',HomeController.homeSignUp)

router.get('/servicebensin',HomeController.serviceBensin)
router.get('/serviceban',HomeController.serviceBan)
router.get('/serviceoli',HomeController.serviceOli)
module.exports = router
