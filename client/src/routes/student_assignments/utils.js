import { addNewStudentAssignment } from "../../api/studentAssignments";

export const colorCategory = {
  Art: "bg-gradient-to-r from-red-800 to-red-500",
  ELA: "bg-gradient-to-r from-blue-800 to-blue-500",
  Math: "bg-gradient-to-r from-indigo-800 to-indigo-500",
  Writing: "bg-gradient-to-r from-green-800 to-green-500",
  "Social Studies": "bg-gradient-to-r from-yellow-800 to-yellow-500",
  Science: "bg-gradient-to-r from-violet-800 to-violet-500",
};

export const filterStudentAssignmentsByQuery = (studentAssignments, query) => {
  if (!studentAssignments.length) return studentAssignments;
  const filteredStudentAssignments = studentAssignments.filter(
    (studentAssignment) => {
      const searchValues = Object.values(studentAssignment).join(" ");
      return searchValues.toLowerCase().includes(query.toLowerCase());
    }
  );

  return filteredStudentAssignments;
};

export const getEndingUrlValue = (imageUrl, dividingChar) => {
  if (!imageUrl) return imageUrl;
  const [value] = imageUrl.split(dividingChar).slice(-1);
  return value;
};

export const handleFormSubmission = async (event) => {
  event.preventDefault();

  const studentAssignment = await addNewStudentAssignment(user?.token, {
    earnedPoints,
    imageUrl,
    notes: assignmentNotes,
    studentId,
    assignmentId,
  });

  if (studentAssignment?.error) {
    setErrorMessage(studentAssignment?.error.data.message);
    return;
  }

  if (studentAssignment) {
    setSubmitSuccess(true);
    navigate(0);
  }
};

export const handleEarnedPointsChanged = (event) => {
  const enteredEarnedPoints = event.target.value;
  setEarnedPoints(enteredEarnedPoints);
};

export const handleNotesChanged = (event) => {
  const notes = event.target.value;
  setAssignmentNotes(notes);
};
