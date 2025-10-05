const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hey,  I am owner')
} );

module.exports = router;