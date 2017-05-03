var express = require('express');

var bookRouter = express.Router();
var router = function (nav) {
    var books = [{
        title: 'War and peace',
        genre: 'Historical Fiction',
        author: 'Lev Nikolayevich Tolostoy',
        read: false
    }, {
        title: 'Les Miserables',
        genre: 'Historical Fiction',
        author: 'Vistor Hugo',
        read: false
    }, {
        title: 'The Time Machine',
        genre: 'Science Fiction',
        author: 'H. G. Wells',
        read: false
    }, {
        title: 'A Journey into the center of the Earth',
        genre: 'Science Fiction',
        author: 'Jules Verne',
        read: false
    }, {
        title: 'The Dark World',
        genre: 'Fantasy',
        author: 'Henry Kuttner',
        read: false
    }];

    bookRouter.route('/')
        .get(function (req, res) {
            res.render('bookListView', {
                title: 'This is my First Express App',
                nav: nav,
                books: books
            });
        });

    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('bookView', {
                title: 'Books: ' + books[id].title,
                nav: nav,
                book: books[id]
            });
        });

    return bookRouter;
};

module.exports = router;