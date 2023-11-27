const express = require("express");
const router = express.Router();
const { saveQuestiontoDb, getQuestions,voteCount } = require("../controllers/question");

router.post("/", saveQuestiontoDb);
router.get("/", getQuestions);
router.post("/vote",voteCount);

module.exports = router;