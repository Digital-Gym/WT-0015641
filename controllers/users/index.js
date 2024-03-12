const express = require('express');
const router = express.Router();

const updateRouter = require('./update'); 
const deleteRouter = require('./delete');
const createRouter = require('./create');

router.use('/api/cards', createRouter, updateRouter, deleteRouter);

module.exports = router;
