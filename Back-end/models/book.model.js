var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    name: {type: String, required: true, max: 100},
    author: {type: String, required: true, max: 100},
    publisher: {type: String, required: true, max: 100},
    publicationDate: {type: number, required: true},
    price: {type: Number, required: true},
    language: {type: String, required: true, max: 100},
    description: {type: String, required: true, max: 1000}
});


// Export the model
module.exports = mongoose.model('Book', BookSchema);