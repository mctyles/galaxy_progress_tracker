const express = require("express");
const { useToken, requireUser } = require("../../authentication");
const {
  getAssignmentsByTeacherId,
  createNewAssignment,
} = require("./assignmentsController");

const assignmentsRouter = express.Router();

assignmentsRouter.get("/", useToken, requireUser, getAssignmentsByTeacherId);

assignmentsRouter.post("/", useToken, requireUser, createNewAssignment);

module.exports = { assignmentsRouter };
