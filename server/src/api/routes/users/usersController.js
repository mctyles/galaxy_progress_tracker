const {
  createUser,
  getUserByUsername,
} = require("../../../db/adapters/usersAdapter");
const jwt = require("jsonwebtoken");
const {
  userAlreadyExistsError,
  invalidPasswordError,
} = require("../../errors");
const { validatePassword } = require("./usersSecurity");
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

async function login(req, res, next) {
  try {
    const { username, password } = req.body;

    const { password: hashedPassword, ...user } = await getUserByUsername(
      username
    );

    const validPassword = await validatePassword(password, hashedPassword);

    if (validPassword) {
      const token = jwt.sign(user, JWT_SECRET);
      res.json({ user, token });
    } else {
      return next(invalidPasswordError(username));
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = { register, login };
