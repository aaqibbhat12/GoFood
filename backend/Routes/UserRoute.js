const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/Usermodel')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const secretKey = "a;lgjdiuojggja;sdj;lakdgn;aslgjlg"

router.post('/createUser', [
    body('email').isEmail().withMessage("Invalid email format"),
    body('name').isLength({ min: 5 }).withMessage("name must be of minimun 5 letters "),
    body('password').isLength({ min: 5 }).withMessage("password must of of five digits ")],



    async (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array() });
        }
        const salt = await bcrypt.genSalt(10);
        const securepassword = await bcrypt.hash(req.body.password, salt)

        try {
            await User.create({
                name: req.body.name,
                address: req.body.address,
                email: req.body.email,
                password: securepassword
            })
            res.json({ success: true })

        }
        catch (error) {
            console.log(error);
            res.json({ success: false })
        }
    })
// login Router
router.post('/loginUser', [
    body('email').isEmail().withMessage("Invalid email format"),
    body('password').isLength({ min: 5 }).withMessage("password must of of five digits ")],



    async (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array() });
        }

        try {
            let email = req.body.email;
            let userData = await User.findOne({ email })
            if (!userData) {
                return res.status(400).json({ error: "try with correct credentials" });
            }
            const pwdcompare = bcrypt.compare(req.body.password, userData.password)
            if (!pwdcompare) {
                return res.status(400).json({ error: "try with correct credentials" })
            }
            const data = {
                user: {
                    id: userData.id
                }
            }
            const authToken = jwt.sign(data, secretKey)
            res.json({ success: true, authToken: authToken })

        }
        catch (error) {
            console.log(error);
            res.json({ success: false })
        }
    })
module.exports = router;

