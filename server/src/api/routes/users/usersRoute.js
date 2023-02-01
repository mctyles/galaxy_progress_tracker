const express = require("express");
const usersRouter = express.Router();

usersRouter.post("/login", login);

usersRouter.post("/register", register);

module.exports = usersRouter;
