import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { fetchStudentAssignments } from "../api/studentAssignments";

export default function useStudentAssignmentsList(studentId) {
  const [studentAssignments, setStudentAssignments] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const getStudentAssignments = async () => {
      const studentAssignmentsList = await fetchStudentAssignments(user?.token);
      if (studentAssignmentsList && studentAssignmentsList.length) {
        setStudentAssignments(studentAssignmentsList);
      }
      return;
    };

    getStudentAssignments();
  }, []);

  return studentAssignments;
}
