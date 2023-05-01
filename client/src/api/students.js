import { studentsController } from "./api";

export async function fetchStudents(token) {
  try {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await studentsController.get("", config);
    const { data } = response;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function addNewStudent(token, studentData) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await studentsController.post("", studentData, config);
    console.log(response);
    const { data } = response;
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
