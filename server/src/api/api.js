const express = require("express");
const { assignmentsRouter } = require("./routes/assignments/assignmentsRoute");
const { studentsRouter } = require("./routes/students/studentsRoute");
const apiRouter = express.Router();
const usersRouter = require("./routes/users/usersRoute");

apiRouter.use("/users", usersRouter);

apiRouter.use("/students", studentsRouter);

apiRouter.use("/assignments", assignmentsRouter);

module.exports = apiRouter;
