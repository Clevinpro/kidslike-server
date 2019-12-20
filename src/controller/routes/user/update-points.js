const User = require('../../../domain/db/schemas/user');
const bcrypt = require('bcrypt');

const updateUser = (request, response) => {
  const userData = request.body;
  const id = request.params.id;

  const sendError = () => {
    response.status(400);
    response.json({
      status: 'error',
      text: 'there is no such user'
    });
  };

  const sendResponse = newUser => {
    if (!newUser) {
      return sendError();
    }

    response.json({
      status: 'success',
      user: newUser
    });
  };

  User.findOneAndUpdate({ _id: id }, {points: userData.points}, { new: true })
    .populate('tasks')
    .then(sendResponse)
    .catch(sendError);
};

module.exports = updateUser;
