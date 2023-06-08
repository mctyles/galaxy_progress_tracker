import { useEffect, useState } from "react";
import useStudentAssignmentsList from "../../hooks/useStudentAssignments";
import StudentAssignmentCell from "./StudentAssignmentCell";
import NoDataMessage from "../../components/NoDataMessage";
import SearchBar from "../../components/SearchBar";
import { filterStudentAssignmentsByQuery } from "./utils";
import FormModal from "../../components/FormModal";
import AddStudentAssignmentForm from "./AddStudentAssignmentForm";
import useStudentsList from "../../hooks/useStudentsList";

export default function StudentAssignmentsList({ studentId }) {
  const studentAssignmentsList = useStudentAssignmentsList();
  const studentsList = useStudentsList();

  const studentAssignments = studentAssignmentsList.filter(
    (studentAssignment) => studentAssignment.studentId === studentId
  );

  const student = studentsList.find((student) => student.id === studentId);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredStudentAssignments = filterStudentAssignmentsByQuery(
    studentAssignments,
    searchQuery
  );

  return (
    <section>
      <h2 className="text-2xl md:text-4xl text-slate-300 mb-4 mb-6">
        Graded Assignments
      </h2>
      <FormModal
        form={<AddStudentAssignmentForm student={student} />}
        title="Add Graded Assignment"
        description="Fill in the assignment information"
        buttonText={`Add Graded Assignment for ${student?.firstName} ${student?.lastInitial}`}
      />
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
