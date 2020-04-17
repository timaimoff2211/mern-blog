const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const config = require('../config/db');
const User = require('../models/user');

router.get('/all', (req, res) => {
    User.getAllUsers((err, users) => {
        if(err) throw err;
        res.json(users);
    })
})

module.exports = router;