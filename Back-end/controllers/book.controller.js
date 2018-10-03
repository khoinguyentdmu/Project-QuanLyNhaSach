var Book = require('../models/book.model');

exports.book_create = function (req, res) {
    var book = new Book(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    book.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json('book Created successfully')
    })
};

exports.book_details = function (req, res) {
    Book.findById(req.params.id, function (err, book) {
        if (err) return next(err);
        res.json(book);
    })
};

exports.books_details = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    Book.find({}, function (err, books) {
        if (err) return next(err);
        res.send(JSON.stringify(books));
    })
};

exports.book_update = function (req, res) {
    Book.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, book) {
        if (err) return next(err);
        res.send('book udpated.');
    });
};

exports.book_delete = function (req, res) {
    Book.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};