import { useContext, useEffect, useState } from "react";
import { fetchAssignments } from "../api/assignments";
import { UserContext } from "../context/UserContext";

export default function useAssignmentsList() {
  const [assignments, setAssignments] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const getAssignments = async () => {
      const assignmentsList = await fetchAssignments(user?.token);
      if (assignmentsList && assignmentsList.length) {
        assignmentsList.forEach((assignment) => {
          if (assignment.dateAssigned) {
            const date = assignment.dateAssigned;
            const dateString = new Date(date.replace(" ", "T"));
            assignment.dateAssigned = dateString.toDateString();
          }
        });

        setAssignments(assignmentsList);
      }
      return;
    };

    getAssignments();
  }, []);

  return assignments;
}
