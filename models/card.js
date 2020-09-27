
const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String, // имя — это строка
    required: true, // оно должно быть у каждого пользователя, так что имя — обязательное поле
    minlength: 2, // минимальная длина имени — 2 символа
    maxlength: 30, // а максимальная — 30 символов
  },
  link: { // у пользователя есть имя — опишем требования к имени в схеме:
    type: String,
    validate: {
      validator: function(v) {
        return /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(v);
      },
      message: props => `${props.value} is not an url`
    },
    required: true, // оно должно быть у каждого пользователя, так что имя — обязательное поле
  },
  owner: { // у пользователя есть имя — опишем требования к имени в схеме:
    type: mongoose.Schema.Types.ObjectId,
    required: true, // оно должно быть у каждого пользователя, так что имя — обязательное поле
  },
  likes: {
    type: mongoose.Schema.Types.ObjectId,
    //required: true,
    default: 0,
  },
  createdAt: {
    Date: Date.now,
    // required: true,
  },
  about: String, // тип — String
});
module.exports = mongoose.model('user', cardSchema);