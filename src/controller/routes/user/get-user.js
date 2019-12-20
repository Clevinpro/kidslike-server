const User = require('../../../domain/db/schemas/user');

const getUser = (request, response) => {
  const id = request.params.id;

  const sendResponse = user => {
    response.set('Content-type', 'application/json');
    response.status(200);
    if (user === null) {
      return response.json({ status: 'no user' });
    }
    response.json({ status: 'success', user });
  };

  const sendError = error => {
    response.status(400);
    response.json({
      error: error
    });
  };

  User.findById(id)
    .populate('ingredients')
    .then(sendResponse)
    .catch(sendError);
};

module.exports = getUser;
