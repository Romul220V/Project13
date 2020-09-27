const router = require('express').Router();
const { getCards, delCardId, createCard } = require('../controllers/cards');

router.get('/cards', getCards);
router.get('/cards/:cardId', delCardId);
router.post('/cards', createCard);
module.exports = router;
