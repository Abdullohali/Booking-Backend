const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
    },
    email: {
        type: String,
    },
    addres: {
        type: String,
    },
    postcode: {
        type: String,
    },
    country: {
        type: String,
    },
    phone: {
        typeof: Number,
    },

});

module.exports = mongoose.model("User", userSchema);