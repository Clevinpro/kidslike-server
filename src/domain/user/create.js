const core = require('../../core');
const { pick } = require('lodash');
const User = require('../db/schemas/user');
const Task = require('../db/schemas/task');
const createUserTasks = require('../../utils/createUserTasks');

const bcrypt = require('bcrypt');

const saveUserInDB = (userData) => new User(userData).save();
  

const pickUserFields = async (user) => {
  const userPopulate = await User.populate(user, 'tasks');
  return pick(userPopulate, [
    '_id',
    'email',
    'photo',
    'googleId',
    'name',
    'points',
    'tasks',
  ]);
  
}

const createUser = (userInput) => new Promise((resolve, reject) => {
  const errorsList = core.inputCheck.user(userInput);

  if (errorsList.length) {
    reject(errorsList);
    return;
  }

  
  const user = {
    ...userInput, 
  };
  if(userInput.password) {
    const hashedPassword = bcrypt.hashSync(userInput.password, 10);
    user.password = hashedPassword;
  }

  console.log('user :', user);

  return Task.insertMany(createUserTasks())
    .then(tasks => {
      user.tasks = tasks.map(task => task._id);
      return saveUserInDB(user)
        .then(pickUserFields)
        .then(resolve)
        .catch(reject);
    })
    
});

module.exports = createUser