var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('client/build'));

app.listen(3000, function(){

  app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });

  console.log('App running on port ' + this.address().port);
});