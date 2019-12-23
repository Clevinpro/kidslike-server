const schedule = require("node-schedule");
const Task = require("../../domain/db/schemas/task");
const User = require("../../domain/db/schemas/user");
const createUserTask = require('../../utils/createUserTask');

function randomIntInc(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

const incrementUserPoints = (id, points) => {
  User.findById(id).exec(function(err, user) {
    if (err) return sendError(err);
    user.points = Number(+user.points + points).toFixed(2);
    user.save();
  });
};

const getNextDay = () => {
  let inputDate = new Date();
  inputDate.setDate(inputDate.getDate() + (1 + 7 - inputDate.getDay()) % 7);
    console.log(inputDate);

  // Get today's date
  const todaysDate = new Date();

  // call setHours to take the time out of the comparison
  if(inputDate.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0)) {
    inputDate = new Date(new Date(inputDate).getTime() + 60 * 60 * 24 * 1000 * 7)
  }
  return inputDate;
}

const scheduleTasks = tasks => {
  let inputDate = new Date(new Date().getTime() + 60 * 10 * 1000);
  console.log('need to run:_____', inputDate.toString())
  let tasksJob = schedule.scheduleJob(inputDate, function() {
    console.log('schudle')  
    inputDate = new Date(new Date(inputDate).getTime() + 60 * 10 * 1000 );
    console.log(inputDate.toString())
    tasksJob.reschedule(inputDate);
    }
  );
}

const scheduleRunner = () => {

  Task.find()
    .lean()
    .exec(function(err, tasks) {
      if (err) throw new Err(err);
      const updated = tasks.map(task => ({...createUserTask(task), ...task}));
      scheduleTasks(updated);
    });
};

module.exports = scheduleRunner;
