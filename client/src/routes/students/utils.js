export function filterStudentsBySchoolYear(students, schoolYear) {
  if (!students) {
    return students;
  }

  let filteredStudentList = students;
  if (schoolYear !== "All")
    filteredStudentList = students.filter(
      (student) => student.schoolYear === schoolYear
    );

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
