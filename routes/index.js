const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const auth = require('http-auth');

const { body, validationResult } = require('express-validator/check');

const router = express.Router();

router.get('/', auth.connect(basic), (req, res) => {
    res.send('Hello World');
});

module.exports = router;