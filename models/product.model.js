const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {type: String, required: true, maxlength: 100},
    price: {type: Number, required: true},
});


// Export the model
module.exports = mongoose.model('products', ProductSchema);
