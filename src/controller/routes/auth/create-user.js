
const jwt = require('jsonwebtoken');
const app = require('../../app/app')
const domain = require('../../../domain');


const generateToken = paramsForTokenGeneration => {
  const secretKey = app.get('superSecret');

  return jwt.sign(paramsForTokenGeneration, secretKey, {
    expiresIn: 60 * 60 * 24 * 7
  });
};


const createUser = (request, response) => {
  console.log('reques', request.body)
  const user = request.body;

  const sendResponse = (user) => {
    console.log('sendRessssssss');
    const token = generateToken({id: user._id });
    
    response.json({
      status: 'success',
      user, 
      token
    });
  };

  const sendError = (errMessages) => {
    response.status(400);
    response.json({
      error: 'users was not saved',
      errMessages
    });
  };

  domain.userAPI.createUser(user)
    .then(sendResponse)
    .catch(sendError)
};

module.exports = createUser;