const express = require('express');
const router = express.Router();
const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/register', async  (req, res) => {
    try {
        let { username, email, password } = req.body;

        let user  = await userModel.findOne({email: email});
        if( user) return res.status(401).send('You already have any account')


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
                    let token = jwt.sign({email, id: user._id}, process.env.JWT_KEY);
                    res.cookie('token', token)
                    res.send("user Created successfully");
                }
            })
        })


    } catch (error) {
        res.send(error.message)
    }
});


module.exports = router;