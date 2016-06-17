var express = require('express');
var app = express();


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist'));


app.get('/', function(request, response) {
  response.render('pages/index', { title: "Inicio" });
})

app.get('/proyectos', function(request, response) {
  response.render('pages/proyectos', { title: "Proyectos" });
})

app.get('/twitch-tv', function(request, response) {
  response.render('pages/twitch-tv', { title: "Twitch-TV" });
});

app.get('/wikipedia-search', function(request, response) {
  response.render('pages/wiki-viewer', { title: "Wikipedia Viewer" });
})

module.exports = app;