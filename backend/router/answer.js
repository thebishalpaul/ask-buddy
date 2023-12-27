const express = require("express");
const router = express.Router();
const { saveAns } = require("../controllers/answer");
const answerDb=require("../models/answer");

router.post('/',saveAns);

module.exports = router;