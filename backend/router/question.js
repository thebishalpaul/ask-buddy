const express = require("express");
const router = express.Router();
const  {saveQuestiontoDb}  = require("../controllers/question");

router.post("/", saveQuestiontoDb);

module.exports = router;