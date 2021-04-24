const jwt = require('jsonwebtoken');

const AuthError = require('../errors/authError');

const secret = process.env;

function auth(req, res, next) {
  try {
    req.user = jwt.verify(req.cookies.jwt, secret.JWT_SECRET);
    console.log(req.cookies);
    next();
  } catch (err) {
    next(new AuthError('Нет доступа к данной странице'));
  }
}

module.exports = auth;
