const schedule = require("node-schedule");
const Task = require("../../domain/db/schemas/task");
const createUserTask = require('../../utils/createUserTask');

const resetTasks = () => {
  Task.updateMany({}

    , {$set: {days: createUserTask({title: '', taskPoints: 0}).days}}
    
    , function (err, result) {
    
        if (err) {
    
            console.log("update document error");
    
        } else {
    
            console.log("update document success");
    
            console.log(result);
    
        }
    
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
  let inputDate = new Date(new Date().getTime() + 60 * 1 * 1000);
  
  let tasksJob = schedule.scheduleJob(inputDate, function() {
    console.log('schudle')  
    inputDate = new Date(new Date(inputDate).getTime() + 60 * 1 * 1000 );
    console.log(inputDate.toString())
    resetTasks();
    tasksJob.reschedule(inputDate);
    }
  );
}

const scheduleRunner = () => {

  // Task.find()
  //   .lean()
  //   .exec(function(err, tasks) {
  //     if (err) throw new Err(err);
  //     const updated = tasks.map(task => ({...createUserTask(task), ...task}));
  //   });
    scheduleTasks();
};

module.exports = scheduleRunner;
