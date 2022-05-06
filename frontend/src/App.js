import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Projects from "./pages/Projects/Projects";
import Project from "./pages/Projects/Project"

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Login />}
      />
      <Route
        path="/projects"
        element={<Projects />}
        // element={!user ? <Navigate replace to="/" /> : <Home />}
      />
      <Route
        path="/project:projectId"
        element={<Project />}
        // element={!user ? <Navigate replace to="/" /> : <Home />}
      />
    </Routes>
  );
}

export default App;
