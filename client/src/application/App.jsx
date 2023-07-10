import React, { useContext, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { UserProvider } from "../context/UserContext";
import AddAssignmentForm from "../routes/assignments/AddAssignmentForm";
import AssignmentsPage from "../routes/assignments/AssignmentsPage";
import UserAuthenticationForm from "../routes/auth/UserAuthenticationForm";
import AddStudentForm from "../routes/students/AddStudentForm";
import StudentsPage from "../routes/students/StudentsPage";
import Home from "./Home";
import StudentProfile from "../routes/students/StudentProfile";
import StudentAssignmentProfile from "../routes/student_assignments/StudentAssignmentProfile";
import Header from "./Header";
import AssignmentProfile from "../routes/assignments/AssignmentProfile";
import Loading from "../components/Loading";
import { StateContext, StateProvider } from "../context/StateContext";

function App() {
  const { isLoading } = useContext(StateContext);

  return (
    <BrowserRouter>
      <div className="App mx-8 my-6 flex flex-col">
        <UserProvider>
          {isLoading && <Loading />}
          <Header />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route
              element={<UserAuthenticationForm />}
              path="users/:authType"
            />
            <Route element={<StudentsPage />} path="me/students" />
            <Route element={<StudentProfile />} path="me/students/:id" />
            <Route element={<AddStudentForm />} path="me/students/add" />
            <Route element={<AssignmentsPage />} path="me/assignments" />
            <Route
              element={<AssignmentProfile />}
              path="me/assignments/:assignmentId"
            />
            <Route element={<AddAssignmentForm />} path="me/assignments/add" />
            <Route
              element={<StudentAssignmentProfile />}
              path="me/students/:studentId/assignments/:assignmentId"
            />
          </Routes>
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
