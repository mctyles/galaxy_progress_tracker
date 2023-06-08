import { Link } from "react-router-dom";
import StudentDataTable from "./StudentDataTable";
import FormModal from "../../components/FormModal";
import AddStudentForm from "./AddStudentForm";

export default function StudentsPage() {
  return (
    <main className="text-white">
      <h2 className="text-2xl md:text-4xl text-slate-300 mb-4 mb-6">
        Your Students
      </h2>
      <FormModal
        form={<AddStudentForm />}
        title="Add a Student To Roster"
        description="Enter the student's information."
        buttonText="Add New Student to Roster"
      />
      <section className="w-full flex flex-col content-center items-center my-3">
        <StudentDataTable />
      </section>
    </main>
  );
}
