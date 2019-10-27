const router = require('express').Router()

router

router.get('/',(req,res)=>{
    res.render('serviceAutoCare')
})

module.exports = router
