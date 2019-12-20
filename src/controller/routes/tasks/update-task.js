const Task = require('../../../domain/db/schemas/task');

const updateTask = (request, response) => {
  const task = request.body;
  const id = request.params.id;
  console.log('task___ :', task);

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

    response.json({
      status: 'success',
      task: newTask
    });
  };

  Task.findOneAndUpdate({ _id: id }, task, { new: true })
    .then(sendResponse)
    .catch(sendError);
};

module.exports = updateTask;
