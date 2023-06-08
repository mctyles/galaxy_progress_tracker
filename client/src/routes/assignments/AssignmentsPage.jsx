import FormModal from "../../components/FormModal";
import AddAssignmentForm from "./AddAssignmentForm";
import AssignmentDataTable from "./AssignmentDataTable";

export default function AssignmentsPage() {
  return (
    <main className="text-white">
      <h2 className="text-2xl md:text-4xl text-slate-300 mb-6">
        Manage Assignments
      </h2>
      <FormModal
        form={<AddAssignmentForm />}
        title="Add a New Assignment"
        description="Enter the assignment data."
        buttonText="Add New Assignment"
      />
      <AssignmentDataTable />
    </main>
  );
}
