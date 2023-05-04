import FormModal from "../../components/FormModal";
import AddAssignmentForm from "./AddAssignmentForm";
import AssignmentDataTable from "./AssignmentDataTable";

export default function AssignmentsPage() {
  return (
    <main className="text-white">
      <AssignmentDataTable />
      <FormModal
        form={<AddAssignmentForm />}
        title="Add a New Assignment"
        description="Enter the assignment data."
        buttonText="Add New Assignment"
      />
    </main>
  );
}
