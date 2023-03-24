const {
  getAllAssignmentsByTeacher,
  createAssignment,
} = require("../../../db/adapters/assignmentsAdapter");
const { getUserById } = require("../../../db/adapters/usersAdapter");
const { noAssignmentsError, addAssignmentError } = require("../../errors");

async function getAssignmentsByTeacherId(req, res, next) {
  try {
    const { id: teacherId } = req.user;
    const assignments = await getAllAssignmentsByTeacher(teacherId);

    const teacher = getUserById(teacherId);

    if (!assignments) {
      return next(noAssignmentsError(teacher?.user.username));
    }

    res.json(assignments);
  } catch (error) {
    console.error(error);
  }
}

async function createNewAssignment(req, res, next) {
  try {
    const assignmentData = req.body;
    const newAssignment = await createAssignment(assignmentData);

    if (!newAssignment) {
      return next(addAssignmentError());
    }

    res.json(newAssignment);
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getAssignmentsByTeacherId, createNewAssignment };
