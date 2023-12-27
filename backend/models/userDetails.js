const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema({
    fullName: String,
    email: {
        type:String,
        unique:true
    },
    password: String
});

module.exports = mongoose.model("user", userDetailsSchema);