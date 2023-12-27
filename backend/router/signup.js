const express = require("express");
const router = express.Router();
const { saveUserDetails } = require("../controllers/signup");

router.post("/",saveUserDetails);

module.exports = router;