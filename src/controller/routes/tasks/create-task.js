const Task = require('../../../domain/db/schemas/tasks');

const createTask = (request, response) => {
  const task = request.body;
  console.log('request: task', task);

  const taskData = { ...task };

  const newTask = new Task(taskData);

  const sendResponse = task => {

    Task.find()
    // .populate('ingredients')
    .exec(function(err, tasks) {
      console.log(err);
      if (err) return sendError(err);
      response.json({
        status: 'success',
        tasks
      });
    });
    
  };

  const sendError = (err) => {
    console.log(JSON.stringify(err));
    response.status(400);
    response.json({
      error: 'task was not saved'
    });
  };

  newTask
    .save()
    .then(sendResponse)
    .catch(sendError);
};

module.exports = createTask;
