var express  = require('express')
var router = express.Router()
var User = require('../models/contactModel')

router.get('/', function(req , res){
    // res.send("Hello SeoCho!!")
    res.render('index',{name:"김태경"} )
})

router.post('/signup', function(req, res){
  console.log(req.body[1].name)
  res.send("Success")
})

module.exports = router;