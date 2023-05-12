import { useEffect, useState } from "react";
import useStudentAssignmentsList from "../../hooks/useStudentAssignments";
import StudentAssignmentCell from "./StudentAssignmentCell";

export default function StudentAssignmentsList({ studentId }) {
  const studentAssignmentsList = useStudentAssignmentsList();

  const studentAssignments = studentAssignmentsList.filter(
    (studentAssignment) => studentAssignment.studentId === studentId
  );

  return (
    <section>
      <h2 className="text-3xl mb-3">Graded Assignments</h2>
      <ul>
        {studentAssignments.map((studentAssignment) => (
          <StudentAssignmentCell
            key={studentAssignment.id}
            studentAssignment={studentAssignment}
          />
        ))}
      </ul>
    </section>
  );
}
