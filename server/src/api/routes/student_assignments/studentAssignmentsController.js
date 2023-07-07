const {
  getAllStudentAssignmentsByTeacher,
  createStudentAssignment,
  getAssignmentByIds,
} = require("../../../db/adapters/studentAssignmentsAdapter");
const {
  fetchStudentsAssignmentsError,
  addStudentAssignmentError,
  studentAssignmentAlreadyExistsError,
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
    const { studentId, teacherId } = req.body;

    const existingStudentAssignment = await getAssignmentByIds(
      studentId,
      teacherId
    );

    console.log("meow", existingStudentAssignment);

    if (existingStudentAssignment) {
      const err = studentAssignmentAlreadyExistsError();
      res.status(400).send(err);
      return;
    }

    const studentAssignment = await createStudentAssignment(req.body);

    if (!studentAssignment) {
      const err = addStudentAssignmentError();
      res.status(400).send(err);
      return;
    }

    res.json(studentAssignment);
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getStudentAssignments, addStudentAssignment };
