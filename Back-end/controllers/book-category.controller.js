var BookCategory = require('../models/book-category.model');
var Book = require('../models/book.model');

exports.bookCategory_create = function (req, res, next) {
    var bookCategory = new BookCategory(
        {
            name: req.body.name
        }
    );

    bookCategory.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Created book category successfully',
                createdBookCategory: {
                    book: result
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

exports.bookCategories_details = function (req, res, next) {
    BookCategory.find()
        .select('_id name')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                bookCategories: docs.map(doc => {
                    return {
                        bookCategory: doc
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
};

exports.bookCategory_delete = function (req, res, next) {
    const id = req.params.id;
    BookCategory.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Book category deleted',
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.bookCategory_details = function (req, res, next) {
    var id = req.params.id;
    BookCategory.find({ _id: id })
        .select('_id name')
        .exec()
        .then(docs => {
            const response = {
                bookCategory: docs
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
};

exports.bookCategory_update = function (req, res, next) {
    const id = req.params.id;

    var newBookCategoryName = req.body.name;
    var oldBookCategoryName;
    BookCategory.find({ _id: id })
        .exec()
        .then(result => {
            oldBookCategoryName = result[0].name;
        });

    BookCategory.update({ _id: id }, { $set: req.body })
        .exec()
        .then(result => {
            Book.updateMany({ bookCategory: oldBookCategoryName }, { $set: { bookCategory: newBookCategoryName } }, { upsert: true, new: false})
                .exec()
                .then(result => {
                    res.status(200).json({
                        message: 'Book category updated'
                    });
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}