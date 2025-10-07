const { default: mongoose } = require("mongoose");

const userSchema  = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },

         email: {
            type: String,
            required: true,
        },
         password: {
            type: String,
            required: true,
        },
         cart: {
            type: Array,
            default: []
        },
        
        orders: {
            type: Array,
            default: []
        },
        contact: {
            type: Number,
        },
        
    }
);

module.exports = mongoose.model('User', userSchema);