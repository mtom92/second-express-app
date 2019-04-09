//Settings
var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');
app.set('view engine','ejs');
app.use(ejsLayouts);
app.listen(3000, function(){
  console.log('Im awake!!');
});


app.get('/', function(req, res) {
  res.render('home');
});

app.get('/animals', function(req, res) {
  res.render('animals', {title: 'Favorite Animals', animals: ['sand crab', 'corny joke dog']})
});

app.get('/foods', function(req, res) {
  res.render('foods', {title: 'Favorite Foods', foods: ['sushi', 'pozole','lasagna']})
});
