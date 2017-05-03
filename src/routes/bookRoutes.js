var express = require('express');
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

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
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                collection.find({}).toArray(function (err, results) {
                    res.render('bookListView', {
                        title: 'This is my First Express App',
                        nav: nav,
                        books: results
                    });
                });
            });

        });

    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = new objectId(req.params.id);
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                collection.findOne({_id : id},
                    function (err, results) {
                        res.render('bookView', {
                            title: 'This is my First Express App',
                            nav: nav,
                            book: results
                        });
                    });
            });
        });

    return bookRouter;
};

module.exports = router;