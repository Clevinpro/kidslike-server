const app = require('./app');
const jwt = require('jsonwebtoken');

const getToken = req =>
  req.body.token ||
  req.query.token ||
  req.headers['x-access-token'] ||
  req.headers['x-auth-token'] ||
  req.headers['authorization'];


const checkToken = (req, res, next) => {
  let token = getToken(req);
  console.log('token :', token);
  const secretKey = app.get('superSecret');
  if (!token) {
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });
  }

  token = token.replace('Bearer ', '');
  console.log('token :', token);
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.json({
        success: false,
        message: 'Failed to authenticate token.'
      });
    }

    req.decoded = decoded;
    next();
  });
};

module.exports = checkToken;
