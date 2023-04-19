var express = require('express'); 
var app = express(); 
app.get('/manow', function(req, res){
     res.send("Hello manow"); }); 
app.listen(3000);