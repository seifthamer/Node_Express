const express = require('express')
const router =  express.Router() 
const path = require('path')
const authMiddleware = (req, res, next) => {
    const auth = true
    if (auth){
      console.log('authorized')
      next()
      
  
    }else 
    {
      res.send('user not authorized')
    }
  }

router.get('/', authMiddleware , (req, res)=> {
    res.sendFile(path.join(__dirname,'../','public','home.html'))
  })
router.get('/contact', (req, res)=> {
    res.sendFile(path.join(__dirname,'../','public','contact.html'))
})


module.exports = router
  