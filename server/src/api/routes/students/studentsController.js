import { getAllStudentsByTeacher } from "../../../db/adapters/studentsAdapter";
import { getUserById } from "../../../db/adapters/usersAdapter";
import { noStudentDataError } from "../../errors";

const getStudentsByTeacherId = async (teacherId) => {
  try {
    const students = await getAllStudentsByTeacher(teacherId);

    const teacher = getUserById(teacherId);

    if (!students) {
      return next(noStudentDataError(teacher?.user.username));
    }
  } catch (error) {
    console.error(error);
  }
};
