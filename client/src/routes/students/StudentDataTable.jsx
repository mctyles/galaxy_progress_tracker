import { useContext } from "react";
import Table from "../../components/table/Table";
import { UserContext } from "../../context/UserContext";
import useStudentsList from "../../hooks/useStudentsList";

export default function StudentDataTable() {
  const { user } = useContext(UserContext);
  const students = useStudentsList();

  return (
    <>
      {students.length ? (
        <Table data={students} />
      ) : (
        <p>"No students to display"</p>
      )}
    </>
  );
}
