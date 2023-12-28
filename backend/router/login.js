const express = require("express");
const router = express.Router();
const { loginUser } = require("../controllers/login");

router.get("/", loginUser);

module.exports = router;