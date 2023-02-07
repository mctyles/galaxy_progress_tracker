function userAlreadyExistsError(username) {
  return {
    name: "UserAlreadyExistsError",
    message: `User already exists with username ${username}`,
  };
}

module.exports = { userAlreadyExistsError };
