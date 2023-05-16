import { useParams } from "react-router-dom";
import useStudentsList from "../../hooks/useStudentsList";
import ReadingLevelCard from "./ReadingLevelCard";
import FormModal from "../../components/FormModal";
import AddStudentAssignmentForm from "../student_assignments/AddStudentAssignmentForm";
import StudentAssignmentsList from "../student_assignments/StudentAssignmentsList";

export default function StudentProfile() {
  const students = useStudentsList();
  const { id } = useParams();

  const student = students.find((student) => student.id === Number(id));

  return (
    <main className="text-white mx-5">
      <header className="flex justify-between mb-6">
        <h1 className="text-4xl">{`${student?.lastInitial}, ${student?.firstName}`}</h1>
        <ReadingLevelCard readingLevel={student?.readingLevel} />
      </header>
      <StudentAssignmentsList studentId={Number(id)} />
      <FormModal
        form={<AddStudentAssignmentForm studentId={id} />}
        title="Add Graded Assignment"
        description="Fill in the assignment information"
        buttonText={`Add Graded Assignment for ${student?.firstName} ${student?.lastInitial}`}
      />
    </main>
  );
}