const express = require('express');
const {send, json} = require('express/lib/response')
const app = express();
const {userList}=require('./userList')
app.use(express.static(__dirname+'/public'))
// console.log(userList)
app.use(express.json())


//methode get
app.get('/users', (req, res) => {
  res.json(userList)})


  //methode post
  app.post('/users', (req, res) => {
    const newuser = req.body
    const newuserList = [...userList,newuser]  
    res.json(newuserList)
  })
  //methode delete
  app.delete('/users/:id', (req, res) => {
    const newuserList = userList.filter(user => user.id!== req.params.id)
    res.json(newuserList)
  })
  //methode put
  app.put('/users/:id', (req, res) => {
    const id = req.params.id
    const newuser = req.body
    const newuserList = userList.map(user => user.id === id? newuser : user)
    res.json(newuserList)
  })

// const authMiddleware = (req, res, next) => {
//   const auth = true
//   if (auth){
//     console.log('authorized')
//     next()
    

//   }else 
//   {
//     res.send('user not authorized')
//   }
// }


// app.get('/', authMiddleware , (req, res)=> {
//     res.sendFile(__dirname+'/public/home.html')
//   })
//   app.get('/contact', (req, res)=> {
//     res.sendFile(__dirname+'/public/contact.html')
// })
  
app.use('/view',require('./routes/view'))
app.listen(8000,(err)=>{
    
    if(err) throw err
    else console.log('server app running on port 8000!')    
})