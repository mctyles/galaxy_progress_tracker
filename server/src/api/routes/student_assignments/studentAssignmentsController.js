const {
  getAllAssignmentsByStudent,
  createStudentAssignment,
} = require("../../../db/adapters/studentAssignmentsAdapter");
const { getStudentById } = require("../../../db/adapters/studentsAdapter");
const {
  fetchStudentsAssignmentsError,
  addStudentAssignmentError,
} = require("../../errors");

async function getStudentAssignments(req, res, next) {
  try {
    const { id } = req.params;
    const studentAssignments = await getAllAssignmentsByStudent(id);

    if (!studentAssignments) {
      const student = await getStudentById(id);
      return next(fetchStudentsAssignmentsError(student));
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
