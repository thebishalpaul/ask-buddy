const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    questionName: String,
    topic: String,
    answer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "answer"
    },
    user: Object,
},
    {
        timestamps: { createdAt: true, updatedAt:false }
    }
);

module.exports = mongoose.model("question", questionSchema);