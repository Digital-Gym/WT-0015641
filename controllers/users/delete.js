const express = require('express');
const router = express.Router();

const deleteGoal = require('../../services/users/delete');

router.delete('/:id', async (req, res) => {
    res.json(await deleteGoal(req));
});

module.exports = router;