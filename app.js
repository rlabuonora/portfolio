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

app.get('/foro-ciudades', function(request, response) {
  response.render('pages/foro-ciudades', { title: "Ciudades Inteligentes" });
})

app.get('/mision-corea', function(request, response) {
  response.render('pages/mision-corea', { title: "Misión a Corea del Sur" });
})

app.get('/twitch-tv', function(request, response) {
  response.render('pages/twitch-tv', { title: "Twitch-TV" });
});

app.get('/wikipedia-search', function(request, response) {
  response.render('pages/wiki-viewer', { title: "Wikipedia Viewer" });
})

module.exports = app;