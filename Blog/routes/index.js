var express = require('express');
var router = express.Router();
var fs = require('fs');
var Data = fs.readFileSync(__dirname+'/blogexpress/data.json','utf-8');
Data = JSON.parse(Data);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});
router.post('/login',function(req, res, next){
 if(Data.users[0].username==req.body.username && Data.users[0].password == req.body.pwd){
   res.render('list');
 }else{
   res.end('The account or password you entered is wrong')
 };
});
module.exports = router;
