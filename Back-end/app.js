// app.js

var express = require('express');
var bodyParser = require('body-parser');

var book = require('./routes/book.route'); // Imports routes for the books
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://root:binhduong@127.0.0.1/QLNhaSach';
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/books', book);

var port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
