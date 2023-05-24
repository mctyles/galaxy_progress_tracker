export function formatAssignmentData(assignments) {
  const formattedAssignments = [];
  for (const assignment of assignments) {
    const { categoryId, teacherId, ...assignmentData } = assignment;
    formattedAssignments.push(assignmentData);
  }

  return formattedAssignments;
}
