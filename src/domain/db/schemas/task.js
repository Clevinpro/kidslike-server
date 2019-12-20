const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema(
  {
    "title": { type: String, require: true },
    "imgName": { type: String },
    days: {
      type: Array, default: []
    },
    "imgName": { type: String },
    "taskPoints": { type: Number, require: true },
  },
  { versionKey: false }
);
const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
