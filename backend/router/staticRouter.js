const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.send("this api is reserved for ask-buddy");
});





module.exports = router;