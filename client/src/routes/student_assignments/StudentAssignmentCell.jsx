export default function StudentAssignmentCell({ studentAssignment }) {
  const colorByCategory = (category) => {
    if (category === "Art") {
      return "red";
    }
    if (category === "ELA") {
      return "blue";
    }
    if (category === "Math") {
      return "indigo";
    }
    if (category === "Writing") {
      return "green";
    }
    if (category === "Social Studies") {
      return "yellow";
    }
    if (category === "Science") {
      return "violet";
    }

    return "blue";
  };

  return (
    <li className="flex justify-around items-center list-none p-3 bg-slate-500 rounded border border-black mb-3 hover:bg-slate-700">
      <p>{studentAssignment?.name}</p>
      <p>{`Points: ${studentAssignment?.earnedPoints}/${studentAssignment?.totalPoints}`}</p>
      <div
        className={`border border-black py-2 px-3 rounded bg-${colorByCategory(
          studentAssignment.category
        )}-700/50`}
      >
        {studentAssignment?.category}
      </div>
    </li>
  );
}
