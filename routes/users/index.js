const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('users/index');
});

router.get('/create', (req, res) => {
    res.render('users/create');
});

module.exports = router;
