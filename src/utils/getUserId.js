const jwt = require('jsonwebtoken');

const getToken = req =>
  req.body.token ||
  req.query.token ||
  req.headers['x-access-token'] ||
  req.headers['x-auth-token'] ||
  req.headers['authorization'];
  
const getUserId = req => {
  const token = getToken(req).replace('Bearer ', '');

  const decodedUser = jwt.decode(token);
  const userId = decodedUser && decodedUser.id || null;
  return userId;
}

module.exports = getUserId;