var express = require('express');
var router = express.Router();

// Require the controllers
var book_controller = require('../controllers/book.controller');

router.post('', book_controller.book_create);
router.get('/:id', book_controller.book_details);
router.get('', book_controller.books_details);
router.put('/:id', book_controller.book_update);
router.delete('/:id', book_controller.book_delete);


module.exports = router;