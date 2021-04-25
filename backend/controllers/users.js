const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const AuthError = require('../errors/authError');
const ExistingMailError = require('../errors/existingMailError');
const IncorrectValueError = require('../errors/incorrectValueError');
const NotFoundError = require('../errors/notFoundError');
// eslint-disable-next-line no-undef
const secret = process.env;

module.exports.getUsers = (req, res, next) => {
  User.find({})
    .populate('user')
    .then((users) => res.send({data: users}))
    .catch(next);
};

module.exports.getUserById = (req, res, next) => {
  const {userId} = req.params;
  User.findById(userId)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Пользователь не найден.');
      }
      res.send(user);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new IncorrectValueError('Переданы некорректные данные для поиска пользователя.'));
      }
      next(err);
    });
};

module.exports.createUser = (req, res, next) => {
  const {
    name,
    about,
    avatar,
    email,
    password,
  } = req.body;

  if (!email || !password) {
    throw new AuthError('Не заполнены все поля');
  }

  bcrypt.hash(password, 10)
    .then((hash) => {
      User.create({
        name,
        about,
        avatar,
        email,
        password: hash,
      })
        .then((user) => res.send({
          _id: user._id,
          email: user.email,
          name: user.name,
          about: user.about,
          avatar: user.avatar,
        }))
        .catch((err) => {
          if (err.name === 'ValidationError') {
            next(new IncorrectValueError('Переданы некорректные данные при создании пользователя.'));
          } else if (err.name === "MongoError" && err.code === 11000) {
            next(new ExistingMailError('Данный email уже используется'));
          }
          next(err);
        });
    })
    .catch((err) => {
      if (err.message.includes('Illegal arguments')) {
        next(new IncorrectValueError('Не введён пароль'));
      }
      next(err);
    });
};

module.exports.updateUserInfo = (req, res, next) => {
  const userId = req.user._id;
  const {name, about} = req.body;

  User.findByIdAndUpdate(userId, {name, about})
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Пользователь не найден');
      }
      res.send(user);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new IncorrectValueError('Переданы некорректные данные при создании пользователя.'));
      }
      next(err);
    });
};

module.exports.getUserInfo = (req, res, next) => {
  const userId = req.user._id;

  User.findById(userId)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Пользователь не найден');
      }
      res.send(user);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new IncorrectValueError('Переданы некорректные данные при получении информации об пользователе.'));
      }
      next(err);
    });
};

module.exports.updateUserAvatar = (req, res, next) => {
  const userId = req.user._id;
  const {avatar} = req.body;

  User.findByIdAndUpdate(userId, {avatar})
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Пользователь не найден');
      }
      res.send({data: user});
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new NotFoundError('Переданы некорректные данные при обновлении аватара.'));
      }
      next(err);
    });
};

module.exports.login = (req, res, next) => {
  const {email, password} = req.body;
  console.log('email', email);
  console.log('password', password);

  if (!email || !password) {
    throw new AuthError('Не заполнены все поля');
  }
  User.findOne({email}).select('+password')
    .then((user) => {
      if (!user) {
        throw new ExistingMailError('Неправильная почта или пароль');
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new AuthError('Неправильная почта или пароль');
          }
          const token = jwt.sign(
            {
              _id: user._id
            },
            secret.JWT_SECRET,
            {expiresIn: '7d'},
          );
          return res.cookie(
            'jwt',
            token,
            {
              maxAge: 3600000,
              httpOnly: true,
              sameSite: 'none',
              secure,
            },
          ).send({message: 'Аутентификация прошла успешно!'});
        });
    })
    .catch((err) => {
      console.log('err', err);
      console.log('err.name', err.name);
      console.log('err.message', err.message);
      // if (err.name === 'ValidationError') {
      if (err.message.includes('Illegal arguments')) {
        next(new IncorrectValueError('Введены не коректные данные'));
      }
      next(err);
    });
};
