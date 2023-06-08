import { useParams } from "react-router-dom";
import useStudentAssignmentsList from "../../hooks/useStudentAssignments";
import useStudentsList from "../../hooks/useStudentsList";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import CategoryLabel from "./CategoryLabel";
import { getEndingUrlValue } from "./utils";

export default function StudentAssignmentProfile() {
  const studentAssignmentsList = useStudentAssignmentsList();
  const students = useStudentsList();
  const { studentId, assignmentId } = useParams();

  const studentAssignment = studentAssignmentsList.find(
    (studentAssignment) => studentAssignment.id === Number(assignmentId)
  );

  const student = students.find((student) => student.id === Number(studentId));

  const fileType = getEndingUrlValue(studentAssignment?.imageUrl, ".");
  const fileName = getEndingUrlValue(
    studentAssignment?.imageUrl,
    "amazonaws.com/"
  );

  return (
    <main className="text-white mx-6">
      <div className="border rounded pt-1 pb-3 shadow">
        <header className="flex justify-between w-full border-b px-3 py-3 mb-3">
          <h2 className="text-2xl mb-2 text-slate-300">
            {studentAssignment?.name}
          </h2>
          <CategoryLabel category={studentAssignment?.category} />
        </header>
        <section className="p-3">
          <p className="text-lg text-slate-300 mb-2">{`Graded for: ${student?.firstName} ${student?.lastInitial}`}</p>
          <p className="mb-2">{`Points: ${studentAssignment?.earnedPoints}/${studentAssignment?.totalPoints}`}</p>
          <p>Notes:</p>
          <p className="bg-slate-300 text-black my-4 p-6 rounded">
            {studentAssignment?.notes}
          </p>
        </section>
      </div>
      <section className="my-6 flex justify-center w-full">
        <DocViewer
          documents={[
            {
              uri: studentAssignment?.imageUrl,
              fileName,
              fileType,
            },
          ]}
          pluginRenderers={DocViewerRenderers}
        />
      </section>
    </main>
  );
}
