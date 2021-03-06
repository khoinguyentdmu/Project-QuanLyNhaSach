// app.js

var express = require('express');
var bodyParser = require('body-parser');
var bookCategory = require('./routes//book-category.route');
var book = require('./routes/book.route'); // Imports routes for the books
var admin = require('./routes/admin.route'); //Imports routes for the admin
var util = require('./routes/util.route'); //Imports routes for the util
var app = express();

// Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/QLNhaSach';
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(function (req, res, next) {
    var allowedOrigins = ['http://127.0.0.1:4200', 'http://localhost:4200'];
    var origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:4200');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/bookCategory', bookCategory);
app.use('/book', book);
app.use('/admin', admin);
app.use('/util', util);

app.use('/image', express.static('assets/images'))

var port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
