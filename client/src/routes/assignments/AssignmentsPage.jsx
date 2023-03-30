import { Link } from "react-router-dom";
import AssignmentDataTable from "./AssignmentDataTable";

export default function AssignmentsPage() {
  return (
    <main>
      <AssignmentDataTable />
      <Link to="/me/assignments/add">Add New Assignment</Link>
    </main>
  );
}
