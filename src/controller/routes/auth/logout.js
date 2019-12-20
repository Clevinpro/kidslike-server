const logout = (request, response) => {
  response.status(200);
  response.json({
    status: 'success',
  });
};

module.exports = logout;
