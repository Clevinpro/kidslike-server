const Task = require('../../../domain/db/schemas/task');
const User = require('../../../domain/db/schemas/user');
const createUserTask = require('../../../utils/createUserTask');
const getUserId = require('../../../utils/getUserId');

const createTask = (request, response) => {
  const task = request.body;
  const userId = getUserId(request);
  console.log('userId :', userId);
  console.log('request: task', task);

  const taskData = { ...task };
  const generatedTask = createUserTask(taskData);
  console.log('generatedTask :', generatedTask);
  const newTask = new Task(createUserTask(taskData));

  const sendResponse = task => {
    User.findOne({ _id: userId })
    .populate('tasks')
    .exec(function(err, user) {
      console.log(err);
      if (err) return sendError(err);
      const tasks = user.tasks.map(el => el._id);
      tasks.push(task._id)
      User.findOneAndUpdate({ _id: userId }, {tasks}, { new: true })
      .populate('tasks')
        .then(newUser => {
          console.log('newUser :', newUser);
          response.json({
            status: 'success',
            tasks: newUser.tasks
          });
        }) 
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
