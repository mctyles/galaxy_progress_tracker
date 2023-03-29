import { useContext } from "react";
import Table from "../../components/table/Table";
import { UserContext } from "../../context/UserContext";
import useAssignmentsList from "../../hooks/useAssignmentsList";

export default function AssignmentDataTable() {
  const { user } = useContext(UserContext);
  const assignments = useAssignmentsList();

  return (
    <>
      {assignments.length ? (
        <Table data={assignments} />
      ) : (
        <p>"No assignments to display"</p>
      )}
    </>
  );
}
