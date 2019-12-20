const Task = require('../../../domain/db/schemas/task');
const User = require('../../../domain/db/schemas/user');
const getUserId = require('../../../utils/getUserId');

const updateTask = (request, response) => {
  const task = request.body;
  const id = request.params.id;
  const userId = getUserId(request);

  console.log('task___ :', task);
console.log('userId :', userId);
  const sendError = () => {
    response.status(400);
    response.json({
      status: 'error',
      text: 'there is no such task'
    });
  };

  const sendResponse = newTask => {
    if (!newTask) {
      return sendError();
    }

    User.findOne({ _id: userId })
    .populate('tasks')
    .exec(function(err, {tasks}) {
      console.log('user tasks:', tasks);
      if (!tasks) {
        return sendError();
      }  
      response.json({
        status: 'success',
        tasks: tasks
      });
    })

  };

  Task.findOneAndUpdate({ _id: id }, task, { new: true })
    .then(sendResponse)
    .catch(sendError);
};

module.exports = updateTask;
