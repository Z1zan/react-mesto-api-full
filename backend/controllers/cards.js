const Card = require('../models/card');

const IncorrectValueError = require('../errors/incorrectValueError');
const NotFoundError = require('../errors/notFoundError');
const ForbiddenError = require('../errors/forbiddenError');

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  const owner = req.user._id;

  Card.create({ name, link, owner })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new IncorrectValueError('Переданы некорректные данные при создании карточки.'));
      }
      next(err);
    });
};

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .populate('card')
    .then((cards) => res.send({ data: cards }))
    .catch(next);
};

module.exports.deleteCardById = (req, res, next) => {
  const { cardId } = req.params;
  Card.findById(cardId)
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка не найдена.');
      }
      if (req.user._id === String(card.owner)) {
        return Card.findByIdAndDelete(cardId)
          .then(() => {
            res.send({ message: "Карточка успешно удалена" });
          });
      }
      throw new ForbiddenError('У вас нет доступа для удаления данной карточки');
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new IncorrectValueError('Переданы некорректные данные для удаления карточки.'));
      }
      next(err);
    });
};

module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Карточка не найдена.');
      }
      res.send({ data: user });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new IncorrectValueError('Переданы некорректные данные для постановки лайка.'));
      }
      next(err);
    });
};

module.exports.dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Карточка не найдена.');
      }
      res.send({ data: user });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new IncorrectValueError('Переданы некорректные данные для убратия лайка.'));
      }
      next(err);
    });
};
