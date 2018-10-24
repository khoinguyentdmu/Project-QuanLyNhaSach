var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    bookCategory: {type: String, required: true},
    bookImage: { type: String, required: true, default: 'default-book-image.png' },
    description: { type: String, required: true },
    format: { type: String, required: true },
    author: { type: String, required: true },
    dimensions: { type: String, required: true },
    publisher: { type: String, required: true },
    publicationDate: { type: String, required: true },
    language: { type: String, required: true },
    reviews: {
        type: [{
            name: { type: String, required: true },
            email: { type: String, required: true },
            review: { type: String, required: true },
            timeReview: { type: Number, required: true }
        }], required: false
    }
});

// Export the model
module.exports = mongoose.model('Book', BookSchema);