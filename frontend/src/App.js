import "./App.css";
import Login from "./pages/Login/Login";
import Projects from "./pages/Projects/Projects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
