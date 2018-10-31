var express = require('express');
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');

//Định nghĩa nơi lưu hình ảnh sách
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'assets/images/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    //if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    if (file.mimetype === 'image/jpg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const image = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

var router = express.Router();

// Require the controllers
var book_controller = require('../controllers/book.controller');

//router.post('', image.single('bookImage'), book_controller.book_create);
router.post('', checkAuth, book_controller.book_create);
router.get('/:id', book_controller.book_details);
router.get('', book_controller.books_details);
router.put('/:id', checkAuth, book_controller.book_update);
router.delete('/:id', checkAuth, book_controller.book_delete);

module.exports = router;