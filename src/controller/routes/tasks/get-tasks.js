const User = require("../../../domain/db/schemas/user");

const getUser = (request, response) => {
  const id = request.params.userId;

  const sendResponse = ({tasks}) => {
    response.set("Content-type", "application/json");
    response.status(200);
    response.json({ status: "success", tasks });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: "task was not found"
    });
  };

  const findUser = 
  User.findOne({ _id: id })
    .populate('tasks');

  findUser.then(sendResponse).catch(sendError);
};

module.exports = getUser;
