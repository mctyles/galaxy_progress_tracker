const express = require("express");
const { useToken, requireUser } = require("../../authentication");
const {
  getStudentsByTeacherId,
  createNewStudent,
} = require("./studentsController");
const {
  getStudentAssignments,
  addStudentAssignment,
} = require("../student_assignments/studentAssignmentsController");
const studentsRouter = express.Router();

studentsRouter.get("/", useToken, requireUser, getStudentsByTeacherId);

studentsRouter.post("/", useToken, requireUser, createNewStudent);

studentsRouter.post(
  "/:id/assignments",
  useToken,
  requireUser,
  addStudentAssignment
);

module.exports = { studentsRouter };
