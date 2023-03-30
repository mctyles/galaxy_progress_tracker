import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import FormButton from "../components/FormButton";
import Navbar from "../components/Navbar";
import { UserProvider } from "../context/UserContext";
import AddAssignmentForm from "../routes/assignments/AddAssignmentForm";
import AssignmentsPage from "../routes/assignments/AssignmentsPage";
import UserAuthenticationForm from "../routes/auth/UserAuthenticationForm";
import AddStudentForm from "../routes/students/AddStudentForm";
import StudentsPage from "../routes/students/StudentsPage";
import "./App.css";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <UserProvider>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route
              element={<UserAuthenticationForm />}
              path="users/:authType"
            />
            <Route element={<StudentsPage />} path="me/students" />
            <Route element={<AddStudentForm />} path="me/students/add" />
            <Route element={<AssignmentsPage />} path="me/assignments" />
            <Route element={<AddAssignmentForm />} path="me/assignments/add" />
          </Routes>
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
