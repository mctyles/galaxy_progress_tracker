import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import FormButton from "../components/FormButton";
import { UserProvider } from "../context/UserContext";
import UserAuthenticationForm from "../routes/auth/UserAuthenticationForm";
import "./App.css";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <UserProvider>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route
              element={<UserAuthenticationForm />}
              path="users/:authType"
            />
          </Routes>
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
