import { useParams } from "react-router-dom";
import useStudentAssignmentsList from "../../hooks/useStudentAssignments";
import useStudentsList from "../../hooks/useStudentsList";

export default function StudentAssignmentProfile() {
  const studentAssignmentsList = useStudentAssignmentsList();
  const students = useStudentsList();
  const { studentId, assignmentId } = useParams();

  console.log(studentId, assignmentId);

  const studentAssignment = studentAssignmentsList.find(
    (studentAssignment) => studentAssignment.id === Number(assignmentId)
  );

  console.log("hi", studentAssignment);

  console.log("fu", studentAssignmentsList);

  const student = students.find((student) => student.id === Number(studentId));

  return (
    <main className="text-white">
      <h1>{studentAssignment?.name}</h1>
      <p>{studentAssignment?.category}</p>
      <p>{`Graded for: ${student?.firstName} ${student?.lastInitial}`}</p>
      <p>{`Points: ${studentAssignment?.earnedPoints}/${studentAssignment?.totalPoints}`}</p>
      <p>{studentAssignment?.notes}</p>
      <img src={studentAssignment?.imageUrl} />
    </main>
  );
}
