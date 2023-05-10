export default function StudentAssignmentCell({ studentAssignment }) {
  <>
    <li className="flex justify-around">
      <p>{studentAssignment.name}</p>
      <p>{`Points: ${studentAssignment.earnedPoints}/${studentAssignment.totalPoints}`}</p>
      <p>{studentAssignment.category}</p>
    </li>
  </>;
}
