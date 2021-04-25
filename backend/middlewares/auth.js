const jwt = require('jsonwebtoken');

const AuthError = require('../errors/authError');

// eslint-disable-next-line no-undef
// const secret = process.env;
const secret = process.env.JWT_SECRET | 'SECRET';

function auth(req, res, next) {
  try {
    req.user = jwt.verify(req.cookies.jwt, secret);
    next();
  } catch (err) {
    next(new AuthError('Нет доступа к данной странице'));
  }
}

module.exports = auth;
