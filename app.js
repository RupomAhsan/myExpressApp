var express = require('express');

var port = process.env.PORT || 3000;
var app = express();

app.use(express.static('public'));
app.set('views','src/views');
app.set('view engine','ejs');

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/books', function (req, res) {
    res.send(('Hello Books!'));
});

app.listen(port, function (err) {
    console.log('App listening on port ' + port + ' !');
});