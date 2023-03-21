import { Link } from "react-router-dom";
import StudentDataTable from "./StudentDataTable";

export default function StudentsPage() {
  return (
    <main>
      <StudentDataTable />
      <Link to="/me/students/add">Add Student To Roster</Link>
    </main>
  );
}
