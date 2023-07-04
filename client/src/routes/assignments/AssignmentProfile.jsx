import { useParams } from "react-router-dom";
import useAssignmentsList from "../../hooks/useAssignmentsList";
import useStudentsList from "../../hooks/useStudentsList";
import CategoryLabel from "../student_assignments/CategoryLabel";
import useCategories from "../../hooks/useCategories";
import StudentAssignmentsList from "../student_assignments/StudentAssignmentsList";

export default function AssignmentProfile() {
  const assignmentsList = useAssignmentsList();
  const students = useStudentsList();
  const categories = useCategories();
  const { assignmentId } = useParams();

  const assignment = assignmentsList.find(
    (assignment) => assignment.id === Number(assignmentId)
  );

  const category = categories.find(
    (category) => category.id === assignment?.categoryId
  );

  return (
    <main className="text-white">
      <div className="border rounded pt-1 pb-3 shadow">
        <header className="flex justify-between w-full border-b px-3 py-3 mb-3">
          <div>
            <h2 className="text-2xl mb-2 text-slate-300">{assignment?.name}</h2>
            <p className="text-md text-slate-500 mb-2">{`${
              assignment?.dateAssigned ?? "No date entered."
            }`}</p>
          </div>
          <CategoryLabel category={category?.name} />
        </header>
        <section className="p-3">
          <StudentAssignmentsList assignmentId={assignment?.id} />
        </section>
      </div>
    </main>
  );
}
