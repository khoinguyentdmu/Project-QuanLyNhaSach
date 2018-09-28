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
        res.send('book Created successfully')
    })
};

exports.book_details = function (req, res) {
    book.findById(req.params.id, function (err, book) {
        if (err) return next(err);
        res.send(book);
    })
};

exports.book_update = function (req, res) {
    book.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, book) {
        if (err) return next(err);
        res.send('book udpated.');
    });
};

exports.book_delete = function (req, res) {
    book.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};