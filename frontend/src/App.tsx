import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Teams from "./pages/Teams/Teams";
import Projects from "./pages/Projects/Projects";
import Tasks from "./pages/Tasks/Tasks";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/teams"
        element={<Teams />}
      />

      <Route
        path="/projects"
        element={<Projects />}
      />

      <Route
        path="/tasks"
        element={<Tasks />}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />
      
    </Routes>
  );
}

export default App;