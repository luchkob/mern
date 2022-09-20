const { urlencoded } = require('express')
const express = require('express')
var route=require('./router/route')
var app=express()
 
 const path = require('path');
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(route)
 app.post('/signup',(req,res)=>{
    res.send(req.body.name)
 })

 
 
 app.use(express.static(path.join(__dirname, 'build')));
 
 app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });
 
 

app.listen(process.env.PORT || 5000)