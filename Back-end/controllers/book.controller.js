var Book = require('../models/book.model');

exports.book_create = function (req, res, next) {
    var book = new Book(
        {
            name: req.body.name,
            price: req.body.price,
            bookImage: req.file.path
        }
    );

    book.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Created book successfully",
                createdBook: {
                    name: result.name,
                    price: result.price,
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: "http://localhost:1234/book/" + result._id
                    }
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.book_details = function (req, res, next) {
    const id = req.params.id;
    Book.findById(id)
        .select('_id name price bookImage')
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if (doc) {
                res.status(200).json({
                    book: doc,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:1234/book/' + doc._id
                    }
                });
            } else {
                res
                    .status(404)
                    .json({ message: "No valid entry found for provided ID" });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};

exports.books_details = function (req, res, next) {
    Book.find()
        .select('_id name price bookImage')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                books: docs.map(doc => {
                    return {
                        name: doc.name,
                        price: doc.price,
                        bookImage: doc.bookImage,
                        _id: doc._id,
                        request: {
                            type: "GET",
                            url: "http://localhost:1234/book/" + doc._id
                        }
                    };
                })
            };
            if (docs.length >= 0) {
                res.status(200).json(response);
            } else {
                res.status(404).json({
                    message: 'No entries found'
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
    /*
        Book.find({}, function (err, books) {
            if (err) return next(err);
            res.send(JSON.stringify(books));
        })*/
};

exports.book_update = function (req, res, next) {
    Book.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, book) {
        if (err) return next(err);
        res.send('book udpated.');
    });
};

exports.book_delete = function (req, res, next) {
    Book.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};