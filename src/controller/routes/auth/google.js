const jwt = require('jsonwebtoken');
const app = require('../../app/app')

const generateToken = paramsForTokenGeneration => {
  const secretKey = app.get('superSecret');

  return jwt.sign(paramsForTokenGeneration, secretKey, {
    expiresIn: 60 * 60 * 24 * 7
  });
};

const loginWithGoogle = (req, res) => {
  const token = generateToken({id: req.user._id });
  // window.location.hash = '';
  res.redirect(`http://localhost:3000?token=${token}`);
  res.end();
}

module.exports = loginWithGoogle