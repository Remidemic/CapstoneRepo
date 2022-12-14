const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true],
    },
    ID: {
        type: String,
        required: [true]
    },
    price: {
        type: String,
        required: [true],

    },
    image: {
        type: [String],
    }
})

const Product = new mongoose.model("Product", productSchema);

module.exports = Product;