const express = require("express");
const { useToken, requireUser } = require("../../authentication");
const { getStudentsByTeacherId } = require("./studentsController");
const studentsRouter = express.Router();

studentsRouter.get("/", useToken, requireUser, getStudentsByTeacherId);

module.exports = { studentsRouter };
