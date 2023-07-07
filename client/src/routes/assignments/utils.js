import { addNewAssignment } from "../../api/assignments";

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

  const filteredAssignments = assignments.filter((assignment) => {
    const searchValues = Object.values(assignment).join(" ");
    console.log(searchValues);
    return searchValues.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return filteredAssignments;
}

export const handleFormSubmission = async (event) => {
  event.preventDefault();

  const assignment = await addNewAssignment(user?.token, {
    name,
    totalPoints,
    categoryId,
    dateAssigned: dateAssigned.startDate,
    teacherId: user?.user.id,
  });

  if (assignment) {
    setSubmitSuccess(true);
    navigate(0);
  }
};

export const handleNameChanged = (event) => {
  const enteredName = event.target.value;
  setName(enteredName);
};

export const handleTotalPointsChanged = (event) => {
  const enteredTotalPoints = event.target.value;
  setTotalPoints(enteredTotalPoints);
};

export const handleCategoryChanged = (event) => {
  const selectedCategoryId = event.target.value;
  setCategoryId(selectedCategoryId);
};
