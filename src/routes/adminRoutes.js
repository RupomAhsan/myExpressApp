var express = require('express');
var mongodb = require('mongodb').MongoClient;

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
books=[];
var adminRouter = express.Router();
var router = function (nav) {
    adminRouter.route('/addBooks')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                collection.insertMany(books,
                    function (err, results) {
                        res.send(results);
                        db.close();
                    });
            });
            //  res.send('Inserting New Books...');
        });

    return adminRouter;
};

module.exports = router;