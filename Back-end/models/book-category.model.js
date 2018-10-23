var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookCategorySchema = new Schema({
    name: { type: String, required: true }
});

// Export the model
module.exports = mongoose.model('BookCategory', BookCategorySchema);