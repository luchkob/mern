const { urlencoded } = require('express')
const express = require('express')
var route=require('./router/route')
var path=require('path')
var cors=require('cors')
var app=express()
 
app.use(express.static(path.join(__dirname, 'build')));
app.get('/api',(req,res)=>{
  res.send('proxy :5000')
})
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
 


app.listen(process.env.PORT || 4000,()=> console.log('4000'))