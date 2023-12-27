const user = require('../models/userDetails');

const saveUserDetails = async (req, res) => {
    const email=req.body.email;
    console.log("req is: " + req);
    try {
        // const isUserPresent = await user.findOne({email});
        
        // if (isUserPresent) {
        //     res.status(400).send({
        //         status: false,
        //         message: "User Already Exist !!"
        //     })
        // }
        await user.create({
            fullname: req.body.fullname,
            email: req.body.email,
            password: req.body.password
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