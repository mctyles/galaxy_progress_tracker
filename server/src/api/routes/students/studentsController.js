const {
  getAllStudentsByTeacher,
  createStudent,
} = require("../../../db/adapters/studentsAdapter");
const { getUserById } = require("../../../db/adapters/usersAdapter");
const { noStudentDataError, addStudentError } = require("../../errors");

const getStudentsByTeacherId = async (req, res, next) => {
  try {
    const { id: teacherId } = req.user;
    const students = await getAllStudentsByTeacher(teacherId);

    const teacher = getUserById(teacherId);

    if (!students) {
      return next(noStudentDataError(teacher?.user.username));
    }

    res.json(students);
  } catch (error) {
    console.error(error);
  }
};

const createNewStudent = async (req, res, next) => {
  try {
    const studentData = req.body;
    const { newStudent } = await createStudent(studentData);

    if (!students) {
      return next(addStudentError());
    }

    res.json(newStudent);
  } catch (error) {
    console.error(error);
  }
};
module.exports = { getStudentsByTeacherId, createNewStudent };
