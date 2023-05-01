import { Link } from "react-router-dom";
import StudentDataTable from "./StudentDataTable";
import FormModal from "../../components/FormModal";
import AddStudentForm from "./AddStudentForm";

export default function StudentsPage() {
  return (
    <main>
      <StudentDataTable />
      {/* <Link to="/me/students/add" className="border rounded p-3">
        Add Student To Roster
      </Link> */}
      <FormModal
        form={<AddStudentForm />}
        title="Add a Student To Roster"
        description="Enter the student's information."
        buttonText="Add New Student to Roster"
      />
    </main>
  );
}
