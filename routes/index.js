const express = require('express');
const router = express.Router();

const test = require('./test');


module.exports = (params) => {

    router.use('/test', test);

    return router;
};