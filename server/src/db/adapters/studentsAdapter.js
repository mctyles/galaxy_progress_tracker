const client = require("../client");
const {
  generateInsertColumns,
  generateInsertValues,
} = require("../queryUtils");

async function getAllStudentsByTeacher(teacherId) {
  const { rows: students } = await client.query(
    `
        SELECT * FROM students
        WHERE "teacherId"=$1;
        `,
    [teacherId]
  );

  return students;
}

async function getStudentById(studentId) {
  const { rows: students } = await client.query(
    `
        SELECT * FROM students
        WHERE id=$1;
        `,
    [studentId]
  );

  return students;
}

async function createStudent(studentObj) {
  const {
    rows: [student],
  } = await client.query(
    `
    INSERT INTO students (${generateInsertColumns(studentObj)})
    VALUES (${generateInsertValues(studentObj)})
    RETURNING *;
    `,
    Object.values(studentObj)
  );

  return student;
}

module.exports = { getAllStudentsByTeacher, getStudentById, createStudent };
