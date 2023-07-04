import { useEffect, useState } from "react";
import useStudentAssignmentsList from "../../hooks/useStudentAssignments";
import StudentAssignmentCell from "./StudentAssignmentCell";
import NoDataMessage from "../../components/NoDataMessage";
import SearchBar from "../../components/SearchBar";
import { filterStudentAssignmentsByQuery } from "./utils";
import FormModal from "../../components/FormModal";
import AddStudentAssignmentForm from "./AddStudentAssignmentForm";
import useStudentsList from "../../hooks/useStudentsList";
import useAssignmentsList from "../../hooks/useAssignmentsList";

export default function StudentAssignmentsList({ studentId, assignmentId }) {
  const studentAssignmentsList = useStudentAssignmentsList();
  const studentsList = useStudentsList();
  const assignmentsList = useAssignmentsList();

  const studentAssignments = studentAssignmentsList.filter(
    (studentAssignment) => {
      if (studentId) return studentAssignment.studentId === studentId;
      return studentAssignment.assignmentId === assignmentId;
    }
  );

  const student = studentsList.find((student) => student.id === studentId);
  const assignment = assignmentsList.find(
    (assignment) => assignment.id === assignmentId
  );

  const [searchQuery, setSearchQuery] = useState("");

  const filteredStudentAssignments = filterStudentAssignmentsByQuery(
    studentAssignments,
    searchQuery
  );

  return (
    <section>
      <h2 className="text-xl md:text-3xl text-slate-300 mb-4 mb-6">
        Graded Assignments
      </h2>
      <FormModal
        form={
          <AddStudentAssignmentForm student={student} assignment={assignment} />
        }
        title="Add Graded Assignment"
        description="Fill in the assignment information"
        buttonText={`Add Graded Assignment
          for ${
            student
              ? student?.firstName + " " + student?.lastInitial
              : assignment?.name
          }`}
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
              assignment={assignment}
            />
          ))
        ) : (
          <NoDataMessage dataType="assignments" />
        )}
      </ul>
    </section>
  );
}
