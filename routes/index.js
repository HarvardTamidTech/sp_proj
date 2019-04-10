const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const auth = require('http-auth');

const { body, validationResult } = require('express-validator/check');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' });
});

module.exports = router;