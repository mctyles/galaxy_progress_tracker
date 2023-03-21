import { useContext, useEffect, useState } from "react";
import { fetchStudents } from "../api/students";
import { UserContext } from "../context/UserContext";

export default function useStudentsList() {
  const [students, setStudents] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const getStudents = async () => {
      const studentsList = await fetchStudents(user?.token);
      if (studentsList && studentsList.length) {
        setStudents(studentsList);
      }
      return;
    };
    getStudents();
  }, []);

  return students;
}
