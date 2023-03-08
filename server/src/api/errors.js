function userAlreadyExistsError(username) {
  return {
    name: "UserAlreadyExistsError",
    message: `User already exists with username ${username}`,
  };
}

function invalidPasswordError(username) {
  return {
    name: "invalidPasswordError",
    message: `Invalid password for user ${username}`,
  };
}

function noStudentDataError(username) {
  return {
    name: "noStudentDataError",
    message: `No student data found for user ${username}.`,
  };
}

function authenticationRequiredError() {
  return {
    name: "authenticationRequiredError",
    message: `You must be logged in to perform this action.`,
  };
}

module.exports = {
  userAlreadyExistsError,
  invalidPasswordError,
  noStudentDataError,
  authenticationRequiredError,
};
