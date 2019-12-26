const Task = require('../../../domain/db/schemas/user');
const bcrypt = require('bcrypt');

const updateTasks = (request, response) => {
  const tasks = request.body;

 

  const sendError = () => {
    response.status(400);
    response.json({
      status: 'error',
      text: 'there is no such tasks'
    });
  };

  const sendResponse = newUser => {
    if (!newUser) {
      return sendError();
    }

    response.json({
      status: 'success',
      tasks: newUser
    });
  };

  Task.findOneAndUpdate({ _id: id }, user, { new: true })
    .then(sendResponse)
    .catch(sendError);

    Task.updateMany({}

      , {$set: {days: createTask({title: '', taskPoints: 0}).days}}
      
      , function (err, result) {
      
          if (err) {
      
              console.log("update document error");
      
          } else {
      
              console.log("update document success");
      
              console.log(result);
      
          }
      
      });
};

module.exports = updateTask;
