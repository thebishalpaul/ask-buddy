const answerDb = require('../models/answer');

const saveAns = async (req, res) => {
    try {
        await answerDb.create({
            answer: req.body.answer,
            questionId: req.body.questionId,
            user: req.body.user
        })
            .then(() => {
                res.status(200).send({
                    status: true,
                    message: "Answer Added Succefully"
                })

            })
            .catch((e) => {
                res.status(400).send({
                    status: false,
                    message: "Bad request"
                })
            })
    } catch (error) {
        res.status(500).send({
            status: false,
            message: "Error while adding answer"
        })
    }
}

module.exports = {
    saveAns
}