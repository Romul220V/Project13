const router = require('express').Router();
const fs = require('fs');
const card = require('../models/user');


router.get('/cards', (req, res) => {
  try {
    const buff = fs.readFileSync('./data/cards.json');
    const cards = JSON.parse(buff);
    res.send(cards);
  } catch (error) {
    res.status(500).send({ message: 'Произошла ошибка' });
  }
});

module.exports = router;
