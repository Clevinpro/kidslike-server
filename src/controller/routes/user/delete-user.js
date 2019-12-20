const User = require('../../../domain/db/schemas/user');

const getUser = (request, response) => {
  const id = request.params.id;

  const sendResponse = () => {
    response.status(200);
    response.json({ status: 'User deleted' });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'user was not deleted'
    });
  };

  User.findById(id)
    .remove()
    .then(sendResponse)
    .catch(sendError);
};

module.exports = getUser;
