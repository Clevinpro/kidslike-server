
const NO_PASSWORD_MESSAGE = 'No users password';
const NO_EMAIL_MESSAGE = 'No users email';
const NO_USER_INPUT = 'No user input';

const userErrorsChecker = (userInput) => {
  const errorMessageList = [];

  if (!userInput) {
    errorMessageList.push(NO_USER_INPUT);
    return errorMessageList;
  }

  // if (!userInput.password) {
  //   errorMessageList.push(NO_PASSWORD_MESSAGE)
  // }

  // if (!userInput.name) {
  //   errorMessageList.push(NO_NAME_MESSAGE)
  // }

  if (!userInput.email) {
    errorMessageList.push(NO_EMAIL_MESSAGE)
  }

  return errorMessageList;
};

module.exports = userErrorsChecker;
