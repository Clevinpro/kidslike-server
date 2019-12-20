const User = require('../../../domain/db/schemas/user');
const jwt = require('jsonwebtoken');

const getToken = req =>
  req.body.token ||
  req.query.token ||
  req.headers['x-access-token'] ||
  req.headers['x-auth-token'] ||
  req.headers['authorization'];

const currentUser = (req, response) => {
  const token = getToken(req).replace('Bearer ', '');

  const decodedUser = jwt.decode(token);
  const userId = decodedUser && decodedUser.id || null;

  const sendResponse = user => {
    response.set('Content-type', 'application/json');
    response.status(200);
    if (user === null) {
      return response.json({ status: 'no user' });
    }
    const { _id, name, email, tasks, points, photo  } = user;

    response.json({ status: 'success', user: { _id, name, email, tasks, points, photo } });
  };

  const sendError = error => {
    response.status(400);
    response.json({
      error: error
    });
  };

  User.findById(userId)
    .populate('tasks')
    .then(sendResponse)
    .catch(sendError);
};

module.exports = currentUser;
