import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./Components/AdminDashboard";
import Home from "./Components/pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;