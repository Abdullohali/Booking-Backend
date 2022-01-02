const mongoose = require('mongoose');

var cardShema = mongoose.Schema({
    cardNumber: {
        type: Number,
        unique: true,
        required: true,
    },
    expiry: {
        type: Number,
        required: true,
    },
    cvv: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }

});

module.exports = mongoose.model("Card", cardShema);