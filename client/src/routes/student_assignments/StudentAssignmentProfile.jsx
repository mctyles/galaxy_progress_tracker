import { useParams } from "react-router-dom";
import useStudentAssignmentsList from "../../hooks/useStudentAssignments";
import useStudentsList from "../../hooks/useStudentsList";
import FilePreviewer from "react-file-previewer";
import CategoryLabel from "./CategoryLabel";

export default function StudentAssignmentProfile() {
  const studentAssignmentsList = useStudentAssignmentsList();
  const students = useStudentsList();
  const { studentId, assignmentId } = useParams();

  const studentAssignment = studentAssignmentsList.find(
    (studentAssignment) => studentAssignment.id === Number(assignmentId)
  );

  const student = students.find((student) => student.id === Number(studentId));

  return (
    <main className="text-white mx-6">
      <section className="flex justify-between">
        <h1 className="text-2xl mb-2">{studentAssignment?.name}</h1>
        <CategoryLabel category={studentAssignment?.category} />
      </section>
      <p className="text-lg ">{`Graded for: ${student?.firstName} ${student?.lastInitial}`}</p>
      <p>{`Points: ${studentAssignment?.earnedPoints}/${studentAssignment?.totalPoints}`}</p>
      <p>{studentAssignment?.notes}</p>
      <section className="my-6 flex justify-center">
        <FilePreviewer
          file={{
            url: studentAssignment?.imageUrl,
          }}
        />
      </section>
    </main>
  );
}
