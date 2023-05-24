import { useEffect, useState } from "react";
import useStudentAssignmentsList from "../../hooks/useStudentAssignments";
import StudentAssignmentCell from "./StudentAssignmentCell";
import NoDataMessage from "../../components/NoDataMessage";

export default function StudentAssignmentsList({ studentId }) {
  const studentAssignmentsList = useStudentAssignmentsList();

  const studentAssignments = studentAssignmentsList.filter(
    (studentAssignment) => studentAssignment.studentId === studentId
  );

  return (
    <section>
      <h2 className="text-3xl mb-3">Graded Assignments</h2>
      <ul>
        {studentAssignments.length ? (
          studentAssignments.map((studentAssignment) => (
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
