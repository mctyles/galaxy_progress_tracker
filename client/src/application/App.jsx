import { useState } from "react";
import { UserProvider } from "../context/UserContext";
import "./App.css";

function App() {
  return (
    <React.Fragment className="App">
      <UserProvider>
        <h1>Welcome to Galaxy Progress Tracker!</h1>
      </UserProvider>
    </React.Fragment>
  );
}

export default App;
