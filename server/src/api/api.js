const express = require("express");
const apiRouter = express.Router();
const usersRouter = require("./routes/users/usersRoute");

apiRouter.use("/users", usersRouter);
