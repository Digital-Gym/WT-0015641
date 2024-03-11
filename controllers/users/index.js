const express = require('express');
const router = express.Router();

const updateRouter = require('./update'); 
const deleteRouter = require('./delete');

router.use('/api/cards', updateRouter, deleteRouter);

module.exports = router;
