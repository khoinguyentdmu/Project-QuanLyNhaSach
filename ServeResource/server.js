var express = require('express');
var app = express();

app.use('/image', express.static('assets/images'))

var server = app.listen(5000);