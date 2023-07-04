const client = require("../client");
const {
  generateInsertColumns,
  generateInsertValues,
} = require("../queryUtils");

async function getAllStudentAssignmentsByTeacher(teacherId) {
  const { rows: studentAssignments } = await client.query(
    `
    SELECT student_assignments."id", student_assignments."earnedPoints", student_assignments."imageUrl", student_assignments."assignmentId", assignments.name, assignments."totalPoints", assignments."dateAssigned", categories.name AS category, assignments."teacherId", student_assignments."studentId", student_assignments.notes FROM assignments
    JOIN categories 
    ON categories.id = assignments."categoryId"
    JOIN student_assignments 
    ON assignments.id = student_assignments."assignmentId"
    JOIN students
    ON student_assignments."studentId" = students.id
    WHERE assignments."teacherId" = $1;`,
    [teacherId]
  );

  return studentAssignments;
}

async function getAssignmentByIds(studentId, assignmentId) {
  const { rows: studentAssignments } = await client.query(
    `
      SELECT assignments.name, assignments."totalPoints", assignments."dateAssigned", categories.name AS category, assignments."teacherId", student_assignments.* FROM assignments
      JOIN categories 
      ON categories.id = assignments."categoryId"
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
  getAllStudentAssignmentsByTeacher,
  getAssignmentByIds,
  createStudentAssignment,
};
