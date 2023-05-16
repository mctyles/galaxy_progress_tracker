import { useParams } from "react-router-dom";
import useStudentAssignmentsList from "../../hooks/useStudentAssignments";
import useStudentsList from "../../hooks/useStudentsList";
import FilePreviewer from "react-file-previewer";

export default function StudentAssignmentProfile() {
  const studentAssignmentsList = useStudentAssignmentsList();
  const students = useStudentsList();
  const { studentId, assignmentId } = useParams();

  const studentAssignment = studentAssignmentsList.find(
    (studentAssignment) => studentAssignment.id === Number(assignmentId)
  );

  const student = students.find((student) => student.id === Number(studentId));

  return (
    <main className="text-white">
      <h1>{studentAssignment?.name}</h1>
      <p>{studentAssignment?.category}</p>
      <p>{`Graded for: ${student?.firstName} ${student?.lastInitial}`}</p>
      <p>{`Points: ${studentAssignment?.earnedPoints}/${studentAssignment?.totalPoints}`}</p>
      <p>{studentAssignment?.notes}</p>
      <section className="w-1/2">
        <FilePreviewer
          file={{
            url: studentAssignment?.imageUrl,
          }}
        />
      </section>
    </main>
  );
}
