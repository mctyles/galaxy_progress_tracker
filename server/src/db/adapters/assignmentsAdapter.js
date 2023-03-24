const client = require("../client");
const {
  generateInsertColumns,
  generateInsertValues,
} = require("../queryUtils");

const getAllAssignmentsByTeacher = async (teacherId) => {
  const { rows: assignments } = await client.query(
    `
  SELECT * FROM assignments
  WHERE "teacherId"=$1;
  `,
    [teacherId]
  );

  console.log(assignments);

  return assignments;
};

const createAssignment = async (assignmentObj) => {
  const {
    rows: [assignment],
  } = await client.query(
    `
      INSERT INTO assignments (${generateInsertColumns(assignmentObj)})
      VALUES (${generateInsertValues(assignmentObj)})
      RETURNING *;
      `,
    Object.values(assignmentObj)
  );

  return assignment;
};

module.exports = { getAllAssignmentsByTeacher, createAssignment };
