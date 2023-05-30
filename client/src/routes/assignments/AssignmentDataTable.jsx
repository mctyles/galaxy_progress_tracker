import Table from "../../components/table/Table";
import useAssignmentsList from "../../hooks/useAssignmentsList";
import NoDataMessage from "../../components/NoDataMessage";
import { filterAssignments, formatAssignmentData } from "./utils";
import { useState } from "react";
import SearchBar from "../../components/SearchBar";

export default function AssignmentDataTable() {
  const assignments = useAssignmentsList();
  const [searchQuery, setSearchQuery] = useState("");

  console.log(assignments);

  const filteredAssignments = filterAssignments(searchQuery, assignments);

  return (
    <main className="flex flex-col justify-center">
      <SearchBar
        value={searchQuery}
        changeHandler={(event) => setSearchQuery(event.target.value)}
      />
      {filteredAssignments.length ? (
        <Table data={formatAssignmentData(filteredAssignments)} />
      ) : (
        <NoDataMessage dataType="assignments" />
      )}
    </main>
  );
}
