const {
  getAllStudentsByTeacher,
} = require("../../../db/adapters/studentsAdapter");
const { getUserById } = require("../../../db/adapters/usersAdapter");
const { noStudentDataError } = require("../../errors");

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

module.exports = { getStudentsByTeacherId };
