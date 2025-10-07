const express = require('express');
const router = express.Router();
const userModel = require('../models/user.model')

router.post('/register', async (req, res) => {
    let {username, email, passowrd}  = req,body;
    let user = await userModel.create({
        email,
        password,
        username,
    })

})


module.exports = router;