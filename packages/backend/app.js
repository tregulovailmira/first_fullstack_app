const express = require('express');
const router = require('./router');
const { errorHandler } = require('./middleware');
const path = require('path');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router);

app.use(errorHandler.errorHandler);

module.exports = app;
