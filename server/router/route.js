var express=require('express')
 var path=require('path')
const route=express.Router()


 
route.get('/signup',(req,res)=>{
    res.sendFile(__dirname+'/signup.html')
})

route.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
module.exports =route;