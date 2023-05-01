import { useContext, useState } from "react";
import Table from "../../components/table/Table";
import { UserContext } from "../../context/UserContext";
import useStudentsList from "../../hooks/useStudentsList";
import SelectDropdown from "../../components/SelectDropdown";
import { filterStudentsBySchoolYear, getSchoolYearList } from "./utils";

export default function StudentDataTable() {
  const { user } = useContext(UserContext);
  const students = useStudentsList();
  const schoolYearList = getSchoolYearList(students);
  const [schoolYear, setSchoolYear] = useState(schoolYearList[0]);

  const filteredStudents = filterStudentsBySchoolYear(students, schoolYear);

  return (
    <section className="mb-3">
      <SelectDropdown
        value={schoolYear}
        options={schoolYearList}
        handleChange={(value) => setSchoolYear(value)}
      />
      {filteredStudents.length ? (
        <Table data={filteredStudents} />
      ) : (
        <p>No students to display</p>
      )}
    </section>
  );
}
