var express = require('express');
var app = express();

/* GET home page. */
app.get('/', (req, res) =>{
  res.send({hi : 'there'});
});



const PORT = process.env.port || 5000;
app.listen(PORT)