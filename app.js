var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var nav= [{
                link: '/books',
                text: 'Book'
            }, {
                link: 'authors',
                text: 'Author'
            }];
var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);
app.use(express.static('public'));
app.set('views', 'src/views');
app.set('view engine', 'ejs');

app.use('/books', bookRouter);
app.use('/Admin', adminRouter);

app.get('/', function (req, res) {
    res.render('index', {
        title: 'This is my First Express App',
        nav: [{
            link: '/books',
            text: 'Books'
        }, {
            link: 'authors',
            text: 'Authors'
        }]
    });
});

/*app.get('/books', function (req, res) {
    res.send(('Hello Books!'));
});*/

app.listen(port, function (err) {
    console.log('App listening on port ' + port + ' !');
});