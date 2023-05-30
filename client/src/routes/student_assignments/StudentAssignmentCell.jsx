import { useNavigate } from "react-router-dom";
import CategoryLabel from "./CategoryLabel";

export default function StudentAssignmentCell({ studentAssignment }) {
  const navigate = useNavigate();

  return (
    <li
      className="flex justify-between items-center list-none px-5 py-3 rounded-lg border border-black mb-3 bg-slate-900 hover:bg-slate-700 hover:scale-105 hover:shadow-2xl"
      onClick={() => navigate(`assignments/${studentAssignment?.id}`)}
    >
      <p className="min-w-[10%]">{studentAssignment?.name}</p>
      <p>{`Points: ${studentAssignment?.earnedPoints}/${studentAssignment?.totalPoints}`}</p>
      <CategoryLabel category={studentAssignment?.category} />
    </li>
  );
}
