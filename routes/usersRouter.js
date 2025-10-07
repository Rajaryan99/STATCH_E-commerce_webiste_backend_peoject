const express = require('express');
const router = express.Router();
const userModel = require('../models/user.model')

router.post('/register', async (req, res) => {
    try {
        let { username, email, password } = req.body;
        let user = await userModel.create({
            username,
            email,
            password
        });
        res.send(user);
    } catch (error) {
        res.send(error.message)
    }
});


module.exports = router;