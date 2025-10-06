const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner.model')

router.get('/', (req, res) => {
    res.send('hey,  I am owner')
} );

router.post('/create', async (req, res) => {
    let owners = await ownerModel.find();
    if(owners.length > 0) {
        return res.status(504)
        .send("you dont have permission to create a new owner.")
    }

    let {username, email, password} = req.body;
    let createdOwner = await ownerModel.create(
    {
       username,
        email,
        password,
    }
    )
    res.status(201).send(createdOwner);
});

module.exports = router;