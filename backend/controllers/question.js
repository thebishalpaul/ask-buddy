const questionDb = require('../models/question');

const saveQuestiontoDb = async (req, res) => {
    console.log(req.body);
    try {
        await questionDb.create({
            questionName: req.body.questionName,
            topic: req.body.topic,
            user: req.body.user
        }).then(() => {
            res.status(201).send({
                status: true,
                message: "Question added successfully"
            })
        }).catch((e) => {
            res.status(400).send({
                status: false,
                message: "Bad format of Question"
            })
        })
    } catch (error) {
        res.status(500).send({
            status: false,
            message: "Error while adding question"
        })
    }
}

const getQuestions = async (req, res) => {
    try {
        await questionDb
            .aggregate([
                {
                    $lookup: {
                        from: "answers",
                        localField: "_id",
                        foreignField: "questionId",
                        as: "allAnswersToQuestion"
                    }
                }
            ])
            .exec()
            .then((doc) => {
                res.status(200).send(doc)
            })
            .catch((error) => {
                res.status(500).send({
                    status: false,
                    message: "Unable to get Questions from database"
                });
            });
    } catch (error) {
        res.status(500).send({
            status: false,
            message: "Unexpected error"
        });
    }
}
module.exports = {
    saveQuestiontoDb,
    getQuestions
}