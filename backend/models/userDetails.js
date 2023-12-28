const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    pic: {
        type: String
    }
}, {
    timestamps: true
});
// userDetailsSchema.pre('save',async function(next))
module.exports = mongoose.model("user", userDetailsSchema);