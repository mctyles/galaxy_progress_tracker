const jwt = require("jsonwebtoken");
const { getUserById } = require("../db/adapters/usersAdapter");
const { authenticationRequiredError } = require("./errors");

const { JWT_SECRET } = process.env;

async function useToken(req, res, next) {
  const prefix = "Bearer";
  const authorization = req.header("Authorization");

  try {
    if (!authorization) return next();

    const token = authorization.slice(prefix.length).trim();
    const { id } = jwt.verify(token, JWT_SECRET);

    if (id) {
      const user = await getUserById(id);

      if (user) {
        req.user = user;
      }
    }

    next();
  } catch (error) {
    console.error(error);
    next(error);
  }
}

async function requireUser(req, res, next) {
  if (!req.user) {
    return next(authenticationRequiredError());
  }

  next();
}

module.exports = { useToken, requireUser };
