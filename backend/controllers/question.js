const questionDb = require('../models/question');

const saveQuestiontoDb = async (req, res) => {
    console.log(req.body);
    try {
        await questionDb.create({
            questionName: req.body.questionName,
            questionUrl: req.body.questionUrl
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

const getQuestions=async (req,res)=>{
    try {
        
    } catch (error) {
        
    }
}
module.exports = {
    saveQuestiontoDb,
    getQuestions
}