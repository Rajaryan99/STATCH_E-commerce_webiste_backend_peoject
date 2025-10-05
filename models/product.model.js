const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        image: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        discount: {
            type: Number,
            default: 0
        },
        bgColor: {
            type: String,
        },
         panelcolor: {
            type: String,
        },
         textcolor: {
            type: String,
        },
    }
);

module.exports = mongoose.model('Product', productSchema)