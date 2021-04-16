const express = require('express');
const router = express.Router();

const test = require('./test');
const register = require('./register');

module.exports = (params) => {

    router.use('/test', test);
    router.use('/register', register);

    return router;
};