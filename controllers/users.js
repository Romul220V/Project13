const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  console.log("req.body");
  User.find({})
    .then(users => res.send({ data: users }))
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.getUsersId = (req, res) => {
  User.find({ _id: req.params.userId})
    .then(user => res.send({ data: user }))
    .catch(err => res.status(404).send({ message: 'Нет пользователя с таким id' }));
};

module.exports.createUser = (req, res) => {
  console.log(req.body);
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then(user => res.send({ data: user }))
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
};