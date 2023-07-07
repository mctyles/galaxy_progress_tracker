export function filterStudentsList(students, schoolYear, query) {
  if (!students) {
    return students;
  }

  const filteredStudentList = students.filter((student) => {
    const searchValues = Object.values(student).join(" ");
    return (
      (schoolYear === "All" ? true : student.schoolYear === schoolYear) &&
      searchValues.toLowerCase().includes(query.toLowerCase())
    );
  });

  const studentList = filteredStudentList.map((student) => {
    const { schoolYear: year, teacherId, ...rest } = student;
    return rest;
  });
  return studentList;
}

export function getSchoolYearList(students) {
  if (!students) {
    return ["None"];
  }
  const set = new Set();

  students.forEach((student) => {
    if (!set.has(student.schoolYear)) {
      set.add(student.schoolYear);
    }
  });
  return [...set, "All"];
}

export const schoolYears = [
  "2022-23",
  "2023-24",
  "2024-25",
  "2025-26",
  "2026-27",
  "2027-28",
  "2028-29",
  "2029-30",
  "2030-31",
  "2031-32",
];
