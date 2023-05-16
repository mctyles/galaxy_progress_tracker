import { useNavigate } from "react-router-dom";

export default function StudentAssignmentCell({ studentAssignment }) {
  const colorCategory = {
    Art: "bg-red-700/50",
    ELA: "bg-blue-700/50",
    Math: "bg-indigo-700/50",
    Writing: "bg-green-700/50",
    "Social Studies": "bg-yellow-700/50",
    Science: "bg-violet-700/50",
  };

  const navigate = useNavigate();

  console.log(studentAssignment);

  return (
    <li
      className="flex justify-between items-center list-none px-5 py-3 bg-slate-500 rounded border border-black mb-3 hover:bg-slate-700"
      onClick={() => navigate(`assignments/${studentAssignment?.id}`)}
    >
      <p className="min-w-[10%]">{studentAssignment?.name}</p>
      <p>{`Points: ${studentAssignment?.earnedPoints}/${studentAssignment?.totalPoints}`}</p>
      <div
        className={`border border-black min-w-[10%] text-center justify-self-end py-2 px-3 rounded ${
          colorCategory[studentAssignment.category]
        }`}
      >
        {studentAssignment.category}
      </div>
    </li>
  );
}
