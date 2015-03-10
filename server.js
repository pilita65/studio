var express = require('express');

var app = express();

// set up handlebars view engine
var handlebars = require('express3-handlebars')
	.create({ defaultLayout:'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('home');
});

app.get('/home', function(req, res) {
	res.render('home');
});

app.get('/about', function(req, res) {
	res.render('about');
});

// 404 catch-all handler (middleware)
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

app.listen(process.env.PORT || 3000);


console.log('Server started on localhost:3000; press Ctrl-C to terminate....');
