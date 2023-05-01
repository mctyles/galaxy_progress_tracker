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

export async function addNewStudentAssignment(token, assignmentData) {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await studentAssignmentsController.post(
      "",
      assignmentData,
      config
    );
    const { data } = response;
    return data;
  } catch (error) {
    console.error(error);
  }
}
