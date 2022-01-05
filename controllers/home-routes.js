const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    console.log('======================');
    res.render('homepage')
});

router.get('/dashboard', (req, res) => {
    console.log('======================');
    res.render('dashboard')
});

router.get('/login', (req, res) => {
    console.log('======================');
    res.render('login')
});
// router.get('/logout', (req, res) => {
//     console.log('======================');
//     res.render('logout')
// });
module.exports = router;