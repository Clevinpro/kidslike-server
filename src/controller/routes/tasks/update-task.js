const Task = require('../../../domain/db/schemas/task');
const User = require('../../../domain/db/schemas/user');
const getUserId = require('../../../utils/getUserId');

const getWeekPoints = (days, taskPoints) => days.reduce((acc, day) => day.isDone && acc + taskPoints || acc , 0)

const updateTask = (request, response) => {
  const forUpdateTask = request.body;
  const id = request.params.id;
  const userId = getUserId(request);

  console.log('task___ :', forUpdateTask);
console.log('userId :', userId);
console.log('id :', id);

  const sendError = () => {
    response.status(400);
    response.json({
      status: 'error',
      text: 'User by taskID not found'
    });
  };

  const sendResponse = (updTask, user) => {
        if (!updTask) {
          return sendError();
        }

       
        
        User.findOne({ _id: userId })
          .populate('tasks')
          .exec(function(err, user) {
            if (!user) {
              return sendError();
            } 
            response.json({
              status: 'success',
              user: user
            });
          })
        
        console.log('updTask :', updTask);

  };
  
  User.findOne({ _id: userId })
  .populate('tasks')
  .exec(function(err, user) { 
    if(!user) sendError();
    const oldTask = user.tasks.find(task => task._id.toString() === id);
    console.log('oldTask :', oldTask);
    const oldWeekPoints = getWeekPoints(oldTask.days, oldTask.taskPoints);
    const newWeekPoints = getWeekPoints(forUpdateTask.days, oldTask.taskPoints);

    const updateBy = newWeekPoints - oldWeekPoints;
    console.log('updateBy :', updateBy);
    const points = user.points + updateBy;
    console.log('points :', points);
    const updUser = {points};
    User.findOneAndUpdate({ _id: userId }, updUser, { new: true })
      .populate('tasks')
      .exec(function(err, user) {
        Task.findOneAndUpdate({ _id: id }, forUpdateTask, { new: true })
          .then((updTask) =>{ sendResponse(updTask, user)})
          .catch(sendError);
      })
  })
  
};

module.exports = updateTask;







