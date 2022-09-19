const express = require('express')

var app=express()
app.use('/',(req,res)=>{
    res.send('hello world')
})

app.listen(process.env.PORT || 5000)