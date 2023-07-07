import { useParams } from "react-router-dom";
import useStudentsList from "../../hooks/useStudentsList";
import ReadingLevelCard from "./ReadingLevelCard";
import StudentAssignmentsList from "../student_assignments/StudentAssignmentsList";

export default function StudentProfile() {
  const students = useStudentsList();
  const { id } = useParams();

  const student = students.find((student) => student.id === Number(id));

  return (
    <main className="text-white md:mx-5">
      <header className="flex flex-row justify-between mb-6">
        <div className="flex items-center mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <h2 className="text-2xl md:text-3xl lg:text-4xl pb-1 px-1 h-fit ml-2">{`${student?.lastInitial}, ${student?.firstName}`}</h2>
        </div>
        <ReadingLevelCard readingLevel={student?.readingLevel} />
      </header>
      <StudentAssignmentsList studentId={Number(id)} />
    </main>
  );
}
