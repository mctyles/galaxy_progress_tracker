const client = require("../client");
const {
  generateInsertColumns,
  generateInsertValues,
} = require("../queryUtils");

async function getAllAssignmentsByStudent(studentId) {
  const { rows: studentAssignments } = await client.query(
    `
    SELECT assignments.name, assignments."totalPoints", assignments."dateAssigned", assignments."categoryId", assignments."teacherId",  student_assignments.* FROM assignments
    JOIN student_assignments 
    ON assignments.id = student_assignments."assignmentId"
    JOIN students
    ON student_assignments."studentId" = students.id
    WHERE students.id = $1;`,
    [studentId]
  );

  return studentAssignments;
}

async function getAssignmentByIds(studentId, assignmentId) {
  const { rows: studentAssignments } = await client.query(
    `
      SELECT assignments.name, assignments."totalPoints", assignments."dateAssigned", assignments."categoryId", assignments."teacherId",  student_assignments.* FROM assignments
      JOIN student_assignments 
      ON assignments.id = student_assignments."assignmentId"
      JOIN students
      ON student_assignments."studentId" = students.id
      WHERE students.id = $1 AND assigments.id = $2;`,
    [studentId, assignmentId]
  );

  return studentAssignments;
}

async function createStudentAssignment(studentAssignmentObj) {
  const {
    rows: [studentAssignment],
  } = await client.query(
    `
    INSERT INTO student_assignments (${generateInsertColumns(
      studentAssignmentObj
    )})
    VALUES (${generateInsertValues(studentAssignmentObj)})
    RETURNING *;
    `,
    Object.values(studentAssignmentObj)
  );

  return studentAssignment;
}

module.exports = {
  getAllAssignmentsByStudent,
  getAssignmentByIds,
  createStudentAssignment,
};
