const express = require('express');
const router = express.Router();
const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/register',  (req, res) => {
    try {
        let { username, email, password } = req.body;


        bcrypt.genSalt(10, (err, salt) => {
            if (err) return res.send(err.message);

            bcrypt.hash(password, salt, async (err, hash) => {
                if (err) return res.send(err.message);

                else {
                    let user = await userModel.create({
                        username,
                        email,
                        password: hash,
                    });
                    jwt.sign()
                }
            })
        })


    } catch (error) {
        res.send(error.message)
    }
});


module.exports = router;