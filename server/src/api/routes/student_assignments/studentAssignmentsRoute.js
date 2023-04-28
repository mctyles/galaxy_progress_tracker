const express = require("express");
const {
  getStudentAssignments,
  addStudentAssignment,
} = require("./studentAssignmentsController");
const { requireUser, useToken } = require("../../authentication");

const studentAssignmentsRouter = express.Router();

module.exports = { studentAssignmentsRouter };
