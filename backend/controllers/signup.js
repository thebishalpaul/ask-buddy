const user = require('../models/userDetails');
const bcrypt = require('bcryptjs');

const saveUserDetails = async (req, res) => {
    const { fullName, email, password, pic } = req.body;
    const isUserPresent = await user.findOne({ email });
    const encryptedPassword = await bcrypt.hash(password, 10);
    if (isUserPresent) {
        res.status(400).send({
            status: false,
            message: "User Already Exist !!"
        })
        return;
    }
    try {
        await user.create({
            fullName,
            email,
            password: encryptedPassword,
            pic
        }).then(() => {
            res.status(201).send({
                status: true,
                message: "User Created Successfully"
            })
        }).catch((e) => {
            res.status(400).send({
                status: false,
                message: "User Not Created"
            })
        })
    } catch (error) {
        res.status(500).send({
            status: false,
            message: "Error while adding user"
        })
    }
}

module.exports = {
    saveUserDetails
}