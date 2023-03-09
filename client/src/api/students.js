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
