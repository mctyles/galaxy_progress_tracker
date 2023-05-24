import { useContext } from "react";
import Table from "../../components/table/Table";
import { UserContext } from "../../context/UserContext";
import useAssignmentsList from "../../hooks/useAssignmentsList";
import NoDataMessage from "../../components/NoDataMessage";
import { formatAssignmentData } from "./utils";

export default function AssignmentDataTable() {
  const { user } = useContext(UserContext);
  const assignments = useAssignmentsList();

  return (
    <main className="flex justify-center">
      {assignments.length ? (
        <Table data={formatAssignmentData(assignments)} />
      ) : (
        <NoDataMessage dataType="assignments" />
      )}
    </main>
  );
}
