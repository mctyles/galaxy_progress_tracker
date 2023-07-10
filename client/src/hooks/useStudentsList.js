import { useContext, useEffect, useState } from "react";
import { fetchStudents } from "../api/students";
import { UserContext } from "../context/UserContext";
import { StateContext } from "../context/StateContext";

export default function useStudentsList() {
  const [students, setStudents] = useState([]);
  const { user } = useContext(UserContext);
  const { setIsLoading } = useContext(StateContext);

  useEffect(() => {
    const getStudents = async () => {
      setIsLoading(true);
      const studentsList = await fetchStudents(user?.token);
      if (studentsList && studentsList.length) {
        setStudents(studentsList);
      }
      setIsLoading(false);
      return;
    };
    getStudents();
  }, []);

  return students;
}
