const express = require("express");
const { assignmentsRouter } = require("./routes/assignments/assignmentsRoute");
const { categoriesRouter } = require("./routes/categories/categoriesRouter");
const { studentsRouter } = require("./routes/students/studentsRoute");
const apiRouter = express.Router();
const usersRouter = require("./routes/users/usersRoute");

apiRouter.use("/users", usersRouter);

apiRouter.use("/students", studentsRouter);

apiRouter.use("/assignments", assignmentsRouter);

apiRouter.use("/categories", categoriesRouter);

module.exports = apiRouter;
