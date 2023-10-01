const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    questionName: String,
    questionUrl: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    answer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "answer"
    }
})

module.exports = mongoose.model("question", questionSchema);