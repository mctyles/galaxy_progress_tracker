const express = require("express");
const {
  getStudentAssignments,
  addStudentAssignment,
} = require("./studentAssignmentsController");
const { requireUser, useToken } = require("../../authentication");

const studentAssignmentsRouter = express.Router();

studentAssignmentsRouter.get("/", useToken, requireUser, getStudentAssignments);

studentAssignmentsRouter.post("/", useToken, requireUser, addStudentAssignment);

module.exports = { studentAssignmentsRouter };
