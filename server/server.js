const { urlencoded } = require('express')
const express = require('express')
var route=require('./router/route')
var app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(route)
 app.post('/signup',(req,res)=>{
    res.send(req.body.name)
 })

app.listen(process.env.PORT || 5000)