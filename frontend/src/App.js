import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Projects from "./pages/Projects/Projects";
import Project from "./pages/Projects/Project";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/project" element={<Project />} />
      
    </Routes>
  );
}

export default App;
