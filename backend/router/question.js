const express = require("express");
const router = express.Router();
const { saveQuestiontoDb, getQuestions } = require("../controllers/question");

router.post("/", saveQuestiontoDb);
router.get("/", getQuestions);

module.exports = router;