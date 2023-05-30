import { useEffect, useState } from "react";
import useStudentAssignmentsList from "../../hooks/useStudentAssignments";
import StudentAssignmentCell from "./StudentAssignmentCell";
import NoDataMessage from "../../components/NoDataMessage";
import SearchBar from "../../components/SearchBar";
import { filterStudentAssignmentsByQuery } from "./utils";

export default function StudentAssignmentsList({ studentId }) {
  const studentAssignmentsList = useStudentAssignmentsList();

  const studentAssignments = studentAssignmentsList.filter(
    (studentAssignment) => studentAssignment.studentId === studentId
  );

  const [searchQuery, setSearchQuery] = useState("");

  const filteredStudentAssignments = filterStudentAssignmentsByQuery(
    studentAssignments,
    searchQuery
  );

  return (
    <section>
      <h2 className="text-3xl mb-3">Graded Assignments</h2>
      <SearchBar
        changeHandler={(event) => setSearchQuery(event.target.value)}
      />
      <ul>
        {filteredStudentAssignments.length ? (
          filteredStudentAssignments.map((studentAssignment) => (
            <StudentAssignmentCell
              key={studentAssignment.id}
              studentAssignment={studentAssignment}
            />
          ))
        ) : (
          <NoDataMessage dataType="assignments" />
        )}
      </ul>
    </section>
  );
}
