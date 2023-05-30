export function formatAssignmentData(assignments) {
  if (!assignments.length) return assignments;
  const formattedAssignments = [];
  for (const assignment of assignments) {
    const { categoryId, teacherId, ...assignmentData } = assignment;
    formattedAssignments.push(assignmentData);
  }

  return formattedAssignments;
}

export function filterAssignments(searchQuery, assignments) {
  if (!assignments.length || !searchQuery.length) return assignments;

  console.log(assignments);

  const filteredAssignments = assignments.filter((assignment) => {
    const searchValues = Object.values(assignment).join(" ");
    console.log(searchValues);
    return searchValues.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return filteredAssignments;
}
