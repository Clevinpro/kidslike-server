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

const getNextDay = (inputDate = new Date(), daysCount = 0) => {
  const day = inputDate.getDay();
  const diff = inputDate.getDate() - day + (day == 0 ? -6:1) + daysCount;
  return new Date(new Date(inputDate.setDate(diff)).setHours(0, 0, 0, 0));
}

const scheduleTasks = () => {
  let inputDate = getNextDay(new Date(), 7);
  console.log('inputDate schedule :', inputDate.toString());
  let tasksJob = schedule.scheduleJob(inputDate, function() {
    console.log('schudle')  
    inputDate = getNextDay(new Date(), 7);
    console.log(inputDate.toString())
    resetTasks();
    tasksJob.reschedule(inputDate);
    }
  );
}

const scheduleRunner = () => {
  Task.find()
    .lean()
    .exec(function(err, tasks) {
      if (err) throw new Err(err);
      const currentDate = new Date(tasks[0].days[0].date);
      const nowDate = new Date(new Date().getTime());
      const currentMonday = getNextDay(currentDate).getDate();
      const nowMonday = getNextDay(nowDate).getDate();
      console.log('currentMonday :', currentMonday);
      console.log('nowMonday :', nowMonday);
      console.log('currentMonday === nowMonday :', currentMonday === nowMonday);
      if(currentMonday !== nowMonday) {
        return resetTasks()
      }
      scheduleTasks();
    });
};

module.exports = scheduleRunner;
