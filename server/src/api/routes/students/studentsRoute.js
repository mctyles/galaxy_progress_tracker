const express = require("express");
const { useToken, requireUser } = require("../../authentication");
const {
  getStudentsByTeacherId,
  createNewStudent,
} = require("./studentsController");
const studentsRouter = express.Router();

studentsRouter.get("/", useToken, requireUser, getStudentsByTeacherId);

studentsRouter.post("/", useToken, requireUser, createNewStudent);

module.exports = { studentsRouter };
