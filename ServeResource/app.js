var express = require('express');
var app = express();

app.use('/image', express.static('assets/images'))

var port = 5000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});