var express = require('express');
var app = express();


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist'));

app.get('/proyectos', function(request, response) {
  response.render('pages/index');
})


module.exports = app;