const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    questionName: String,
    topic: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    answer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "answer"
    },
    user: Object,
});

module.exports = mongoose.model("question", questionSchema);