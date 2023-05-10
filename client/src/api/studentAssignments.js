import { studentAssignmentsController } from "./api";

export async function fetchStudentAssignments(token) {
  try {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await studentAssignmentsController.get("", config);
    const { data } = response;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function addNewStudentAssignment(token, studentAssignmentData) {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await studentAssignmentsController.post(
      "",
      studentAssignmentData,
      config
    );
    const { data } = response;
    return data;
  } catch (error) {
    console.error(error);
  }
}
