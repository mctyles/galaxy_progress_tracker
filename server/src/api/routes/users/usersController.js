const {
  createUser,
  getUserByUsername,
} = require("../../../db/adapters/usersAdapter");
const jwt = require("jsonwebtoken");
const { userAlreadyExistsError } = require("../../errors");
const { JWT_SECRET } = process.env;

async function register(req, res, next) {
  try {
    const { firstName, lastName, username, password } = req.body;

    const userExistsWithUsername = await getUserByUsername(username);

    if (userExistsWithUsername) {
      return next(userAlreadyExistsError(username));
    }

    const user = await createUser(firstName, lastName, username, password);
    const token = jwt.sign(user, JWT_SECRET);

    res.json({ user, token });
  } catch (error) {
    console.error(error);
  }
}
