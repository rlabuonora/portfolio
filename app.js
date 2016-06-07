var express = require('express');
var app = express();


app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist'));


module.exports = app;