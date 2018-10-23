var express = require('express');
const checkAuth = require('../middleware/check-auth');

var router = express.Router();

// Require the controllers
var bookCategory_controller = require('../controllers/book-category.controller');

router.post('', checkAuth, bookCategory_controller.bookCategory_create);
router.get('', bookCategory_controller.bookCategories_details);
router.delete('/:id', bookCategory_controller.bookCategory_delete);

module.exports = router;