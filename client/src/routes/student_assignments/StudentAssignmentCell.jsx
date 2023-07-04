import { useNavigate } from "react-router-dom";
import CategoryLabel from "./CategoryLabel";
import useStudentsList from "../../hooks/useStudentsList";

export default function StudentAssignmentCell({
  studentAssignment,
  assignment,
}) {
  const navigate = useNavigate();

  const studentsList = useStudentsList();

  const student = studentsList.find(
    (student) => student.id === studentAssignment.studentId
  );

  return (
    <li
      className="flex justify-between items-center list-none px-5 py-3 rounded-lg border border-black mb-3 bg-slate-900 hover:bg-slate-700 hover:shadow-2xl"
      onClick={() =>
        navigate(
          `/me/students/${studentAssignment.studentId}/assignments/${studentAssignment?.id}`
        )
      }
    >
      <p className="min-w-[10%] text-xl">
        {!assignment
          ? studentAssignment?.name
          : student?.firstName + " " + student?.lastInitial}
      </p>
      <p>{`Points: ${studentAssignment?.earnedPoints}/${studentAssignment?.totalPoints}`}</p>
      {!assignment ? (
        <CategoryLabel category={studentAssignment?.category} />
      ) : null}
    </li>
  );
}
