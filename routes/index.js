const express = require('express');
const router = express.Router();

const test = require('./test');
const register = require('./register');
const login = require('./login');
const plants = require('./plants');
const map = require('./map');

module.exports = (params) => {

    router.get('/', (req, res,next) => {
                var sess = req.session;
                var loginUser = sess.loginUser;
                var isLogined = !!loginUser;
                res.render('layout', {
                    template: 'home',isLogined
                })
                next();
                }
            );
    router.use('/test', test);
    router.use('/register', register);
    router.use('/login', login);
    router.use('/plants',plants);
    router.use('/map', map);

    return router;
};