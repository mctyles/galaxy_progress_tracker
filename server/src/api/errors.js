function userAlreadyExistsError(username) {
  return {
    name: "UserAlreadyExistsError",
    message: `User already exists with username ${username}`,
  };
}

function loginError() {
  return {
    name: "loginError",
    message: "The username or password is incorrect",
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

function fetchCategoriesError() {
  return {
    name: "fetchCategoriesError",
    message: `No categories were found.`,
  };
}

function fetchStudentsAssignmentsError() {
  return {
    name: "fetchStudentAssignmentsError",
    message: `There are no graded assignments to display.`,
  };
}

function addStudentAssignmentError() {
  return {
    name: "addStudentAssignmentError",
    message: "There was an error adding this assignment for this student",
  };
}

function getUploadUrlError() {
  return {
    name: "getUploadUrlError",
    message: "There was an error generating an upload URL for this file.",
  };
}

module.exports = {
  userAlreadyExistsError,
  loginError,
  invalidPasswordError,
  noStudentDataError,
  authenticationRequiredError,
  addStudentError,
  noAssignmentsError,
  addAssignmentError,
  fetchCategoriesError,
  fetchStudentsAssignmentsError,
  addStudentAssignmentError,
  getUploadUrlError,
};
