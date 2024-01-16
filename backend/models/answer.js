const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
    answer: String,
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "question"
    },
    user: Object,
}, {
    timestamps: {createdAt:true,updatedAt:false}
});

module.exports = mongoose.model("answer", answerSchema);