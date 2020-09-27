const utils = require('../utils/utils');
const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
  .then(cards => res.send({ data: cards }))
  .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.delCardId = (req, res) => {
  Card.findOneAndRemove({_id: req.params.cardId})
  .then(card => res.send({ data: card }))
  .catch(err => res.status(404).send({ message: 'Нет пользователя с таким id' }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner = req.user._id})
    .then(card => res.send({ data: card }))
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
  console.log(req.user._id);
};