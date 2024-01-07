const express = require("express");
const router = express.Router();
const { saveAns } = require("../controllers/answer");

router.post('/',saveAns);

module.exports = router;