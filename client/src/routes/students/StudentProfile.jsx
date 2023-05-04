import { useParams } from "react-router-dom";
import useStudentsList from "../../hooks/useStudentsList";
import ReadingLevelCard from "./ReadingLevelCard";

export default function StudentProfile() {
  const students = useStudentsList();
  const { id } = useParams();

  console.log(students);
  console.log(id);

  const student = students.find((student) => student.id === Number(id));

  return (
    <main className="text-white mx-5">
      <header className="flex justify-between mb-6">
        <h1 className="text-4xl">{`${student?.lastInitial}, ${student?.firstName}`}</h1>
        <ReadingLevelCard readingLevel={student?.readingLevel} />
      </header>
      <section>
        <h2 className="text-3xl">Graded Assignments</h2>
      </section>
    </main>
  );
}
