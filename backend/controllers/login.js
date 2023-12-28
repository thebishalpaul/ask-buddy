const user = require('../models/userDetails');
const jwt = require("jsonwebtoken");
const jwt_secret = "werqrwqrwrwefdfghyjytdjnyhdyjhnd";
const bcrypt = require('bcryptjs');

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const isUser = await user.findOne({ email });

    if (!isUser) {
        return res.json({ error: "User not found" });
    }
    if (await bcrypt.compare(password, isUser.password)) {
        const token = jwt.sign({ email: isUser.email }, jwt_secret);

        if (res.status(201)) {
            return res.json({ status: "ok", data: token });
        } else {
            return res.json({ error: "error" });
        }
    }
    res.json({ status: "error", error: "Invalid Password" });
}

module.exports = {
    loginUser
}