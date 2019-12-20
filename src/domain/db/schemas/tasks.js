const mongoose = require("mongoose");
const createUserTasks = require('../../../utils/createUserTasks');

const TasksSchema = mongoose.Schema(
  {
    items: {
      type: Array, default: createUserTasks()
    }
  },
  { versionKey: false }
);
const Tasks = mongoose.model("Tasks", TasksSchema);
module.exports = Tasks;
