const jwt = require('jsonwebtoken');

const AuthError = require('../errors/authError');

function auth(req, res, next) {
  try {
    req.user = jwt.verify(req.cookies.jwt, 'super-strong-secret');
    next();
  } catch (err) {
    next(new AuthError('Нет доступа к данной странице'));
  }
}

module.exports = auth;
