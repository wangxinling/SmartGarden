const express = require('express');
const router = express.Router();

const test = require('./test');
const register = require('./register');
const login = require('./login');

module.exports = (params) => {

    router.get('/', (req, res,next) => {
                var sess = req.session;
                var loginUser = sess.loginUser;
                var isLogined = !!loginUser;
                res.render('layout', {
                    template: 'home',isLogined :false
                })
                next();
                }
            );
    router.use('/test', test);
    router.use('/register', register);
    router.use('/login', login);

    return router;
};