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

export function handleSearchQueryChange(query, students) {}
