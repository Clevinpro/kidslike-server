const Task = require("../../../domain/db/schemas/tasks");

const deleteTask = (request, response) => {
  const tasks = request.body;
  const id = request.params.id;

  const sendError = () => {
    response.status(400);
    response.json({
      status: "error",
      text: "there is no such tasks"
    });
  };

  const sendResponse = () => {
    Task.find()
    .exec(function(err, taskss) {
      console.log(err);
      if (err) return sendError(err);
      response.json({
        status: "success",
        taskss
      });
    });
  };

  Task.deleteOne({ _id: id }, { new: true })
    .then(sendResponse)
    .catch(sendError);
};

module.exports = deleteTask;
