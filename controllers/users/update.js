const express = require('express');
const router = express.Router();

const update = require('../../services/users/update');

router.put('/api/cards/:id', async (req, res) => {
    res.json(await update(req));
});

module.exports = router;
