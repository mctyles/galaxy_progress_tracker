const express = require("express");
const { studentsRouter } = require("./routes/students/studentsRoute");
const apiRouter = express.Router();
const usersRouter = require("./routes/users/usersRoute");

apiRouter.use("/users", usersRouter);

apiRouter.use("/students", studentsRouter);

module.exports = apiRouter;
