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

const createStudent = async (student) => {
  const {
    rows: [student],
  } = await client.query(
    `
    INSERT INTO students (${generateInsertColumns(student)})
    VALUES (${generateInsertValues(student)})
    RETURNING *;
    `,
    Object.values(student)
  );
};

module.exports = { getAllStudentsByTeacher, createStudent };
