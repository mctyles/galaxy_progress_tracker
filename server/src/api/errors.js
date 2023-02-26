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

module.exports = {
  userAlreadyExistsError,
  invalidPasswordError,
  noStudentDataError,
};
