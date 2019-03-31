const express = require('express');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
var path = require("path");

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

module.exports = app;