const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema(
    {
        username: {
            type: String,
            minLength: 3,
            trim: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
         products: {
            type: Array,
            default: []
        },
         contact: {
            type: Number,
        },
        picture: {
            type: String
        },
    },
);

module.exports = mongoose.model('Owner', ownerSchema);