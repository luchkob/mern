var express=require('express')
 
const route=express.Router()
 
route.get('/',(req,res)=>{
    res.send('home page')
})
route.get('/signup',(req,res)=>{
    res.sendFile(__dirname+'/signup.html')
})
 
module.exports =route;