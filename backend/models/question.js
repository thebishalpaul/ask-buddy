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
    upvoters: {
        type: Array,
        "default": []
    },
    downvoters: {
        type: Array,
        "default": []
    }
})

module.exports = mongoose.model("question", questionSchema);