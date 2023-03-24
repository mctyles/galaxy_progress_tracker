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

function addStudentError() {
  return {
    name: "addStudentError",
    message: `There was an error adding this student to the roster.`,
  };
}

function authenticationRequiredError() {
  return {
    name: "authenticationRequiredError",
    message: `You must be logged in to perform this action.`,
  };
}

function noAssignmentsError(username) {
  return {
    name: "noAssignmentsError",
    message: `No assignments found for user ${username}.`,
  };
}

function addAssignmentError() {
  return {
    name: "addAssignmentError",
    message: `There was an error adding this assignment.`,
  };
}

module.exports = {
  userAlreadyExistsError,
  invalidPasswordError,
  noStudentDataError,
  authenticationRequiredError,
  addStudentError,
  noAssignmentsError,
  addAssignmentError,
};
