var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
    bookImage: { type: String, required: true }
});


// Export the model
module.exports = mongoose.model('Book', BookSchema);