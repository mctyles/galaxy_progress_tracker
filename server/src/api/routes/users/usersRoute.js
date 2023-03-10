const express = require("express");
const { register, login } = require("./usersController");
const usersRouter = express.Router();

usersRouter.post("/login", login);

usersRouter.post("/register", register);

module.exports = usersRouter;
