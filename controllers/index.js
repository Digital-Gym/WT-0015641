const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs/promises');


router.get('/', (req, res) => {
  res.render('index');
});


router.get('/api/cards', async (req, res) => {
    try {
      const jsonPath = path.join(__dirname, '..', 'data', 'db.json');
      const data = await fs.readFile(jsonPath, 'utf8');
      const cards = JSON.parse(data);
      res.json(cards);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


module.exports = router;