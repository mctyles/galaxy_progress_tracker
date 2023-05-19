const express = require("express");
const apiRouter = express.Router();
const { assignmentsRouter } = require("./routes/assignments/assignmentsRoute");
const { categoriesRouter } = require("./routes/categories/categoriesRouter");
const { studentsRouter } = require("./routes/students/studentsRoute");
const usersRouter = require("./routes/users/usersRoute");
const {
  studentAssignmentsRouter,
} = require("./routes/student_assignments/studentAssignmentsRoute");
const { s3urlRouter } = require("./routes/s3url/s3urlRoute");

apiRouter.use("/users", usersRouter);

apiRouter.use("/students", studentsRouter);

apiRouter.use("/assignments", assignmentsRouter);

apiRouter.use("/categories", categoriesRouter);

apiRouter.use("/student_assignments", studentAssignmentsRouter);

apiRouter.use("/s3url", s3urlRouter);

module.exports = apiRouter;
