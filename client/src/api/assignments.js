import { assignmentsController } from "./api";

export async function fetchAssignments(token) {
  try {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await assignmentsController.get("", config);
    const { data } = response;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function addNewAssignment(token, assignmentData) {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await assignmentsController.post(
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
