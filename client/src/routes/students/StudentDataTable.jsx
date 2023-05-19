import { useContext, useState } from "react";
import Table from "../../components/table/Table";
import { UserContext } from "../../context/UserContext";
import useStudentsList from "../../hooks/useStudentsList";
import SelectDropdown from "../../components/SelectDropdown";
import { filterStudentsBySchoolYear, getSchoolYearList } from "./utils";

export default function StudentDataTable() {
  const students = useStudentsList();
  const schoolYearList = getSchoolYearList(students);
  const [schoolYear, setSchoolYear] = useState(schoolYearList[0]);

  const filteredStudents = filterStudentsBySchoolYear(students, schoolYear);

  return (
    <section className="mb-3 w-full">
      <h3>Select Year: </h3>
      <SelectDropdown
        value={schoolYear}
        options={schoolYearList}
        handleChange={(value) => setSchoolYear(value)}
        dropdownWidth="1/4"
      />
      {filteredStudents.length ? (
        <Table data={filteredStudents} />
      ) : (
        <p className="p-10 border rounded">No students to display</p>
      )}
    </section>
  );
}
