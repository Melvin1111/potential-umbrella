const express = require('express');
const {getCategories} = require('./controllers/categories.controller');

//require controllers here

const app = express();

console.log('in app')

app.get('/api/categories', getCategories);

module.exports = app;
