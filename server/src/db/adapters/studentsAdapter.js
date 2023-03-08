const client = require("../client");
const {
  generateInsertColumns,
  generateInsertValues,
} = require("../queryUtils");

const getAllStudentsByTeacher = async (teacherId) => {
  const { rows: students } = await client.query(
    `
        SELECT * FROM students
        WHERE "teacherId"=$1;
        `,
    [teacherId]
  );

  return students;
};

const createStudent = async (studentObj) => {
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
};

module.exports = { getAllStudentsByTeacher, createStudent };
