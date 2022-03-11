import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./components/profile.css";

import Peoples from "./pages/Peoples";
import Todo from "./pages/Todos";
import Users from "./pages/Users";

function App() {
  return (
    <div className="App">
      <Users />
      
    </div>
  );
}

export default App