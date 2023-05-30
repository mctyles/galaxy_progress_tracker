import FormModal from "../../components/FormModal";
import AddAssignmentForm from "./AddAssignmentForm";
import AssignmentDataTable from "./AssignmentDataTable";

export default function AssignmentsPage() {
  return (
    <main className="text-white">
      <h2 className="mb-6 text-lg sm:text-xl md:text-2xl">
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
