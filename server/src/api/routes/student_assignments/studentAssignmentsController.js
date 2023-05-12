const {
  getAllStudentAssignmentsByTeacher,
  createStudentAssignment,
} = require("../../../db/adapters/studentAssignmentsAdapter");
const {
  fetchStudentsAssignmentsError,
  addStudentAssignmentError,
} = require("../../errors");

async function getStudentAssignments(req, res, next) {
  try {
    const { id } = req.user;
    const studentAssignments = await getAllStudentAssignmentsByTeacher(id);

    if (!studentAssignments) {
      return next(fetchStudentsAssignmentsError());
    }

    res.json(studentAssignments);
  } catch (error) {
    console.error(error);
  }
}

async function addStudentAssignment(req, res, next) {
  try {
    const studentAssignment = await createStudentAssignment(req.body);

    if (!studentAssignment) {
      return next(addStudentAssignmentError());
    }

    res.json(studentAssignment);
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getStudentAssignments, addStudentAssignment };
