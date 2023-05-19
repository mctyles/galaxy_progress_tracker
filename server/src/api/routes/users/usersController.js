const {
  createUser,
  getUserByUsername,
} = require("../../../db/adapters/usersAdapter");
const jwt = require("jsonwebtoken");
const {
  userAlreadyExistsError,
  invalidPasswordError,
  loginError,
} = require("../../errors");
const { validatePassword } = require("./usersSecurity");
const { JWT_SECRET } = process.env;

async function register(req, res) {
  try {
    const { firstName, lastName, username, password } = req.body;

    const userExistsWithUsername = await getUserByUsername(username);

    if (userExistsWithUsername) {
      const err = userAlreadyExistsError(username);
      res.status(401).send(err);
    }

    const user = await createUser({ firstName, lastName, username, password });
    const token = jwt.sign(user, JWT_SECRET);

    res.json({ user, token });
  } catch (error) {
    console.error(error);
  }
}

async function login(req, res, next) {
  try {
    const { username, password } = req.body;

    const userData = await getUserByUsername(username);

    if (!userData) {
      const err = loginError();
      res.status(401).send(err);
      return;
    }

    const { password: hashedPassword, ...user } = userData;

    const validPassword = await validatePassword(password, hashedPassword);

    if (validPassword) {
      const token = jwt.sign(user, JWT_SECRET);
      res.json({ user, token });
    } else {
      const err = invalidPasswordError(username);
      res.status(401).send(err);
      return;
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = { register, login };
