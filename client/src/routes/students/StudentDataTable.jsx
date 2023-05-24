import { useState } from "react";
import Table from "../../components/table/Table";
import useStudentsList from "../../hooks/useStudentsList";
import SelectDropdown from "../../components/SelectDropdown";
import { filterStudentsList, getSchoolYearList } from "./utils";
import NoDataMessage from "../../components/NoDataMessage";
import SearchBar from "../../components/SearchBar";

export default function StudentDataTable() {
  const students = useStudentsList();
  const schoolYearList = getSchoolYearList(students);
  const [schoolYear, setSchoolYear] = useState(schoolYearList[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStudents = filterStudentsList(
    students,
    schoolYear,
    searchQuery
  );

  return (
    <section className="mb-3 w-full flex flex-col content-center">
      <h3>Select Year: </h3>
      <SelectDropdown
        value={schoolYear}
        options={schoolYearList}
        handleChange={(value) => setSchoolYear(value)}
        dropdownWidth="1/4"
      />
      <SearchBar
        value={searchQuery}
        changeHandler={(event) => setSearchQuery(event.target.value)}
      />
      {filteredStudents.length ? (
        <Table data={filteredStudents} />
      ) : (
        <NoDataMessage dataType="students" />
      )}
    </section>
  );
}
