const User = require('../../../domain/db/schemas/user');

const getAllUser = (request, response) => {
  const sendResponse = user => {
    response.status(200);
    response.json(user);
  };

  const sendError = error => {
    response.status(400);
    response.json({
      error: error
    });
  };

  User.find()
    .then(sendResponse)
    .catch(sendError);
};

module.exports = getAllUser;
