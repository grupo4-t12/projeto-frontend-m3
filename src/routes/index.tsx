import { Routes, Route } from "react-router-dom";

import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import HistoryConsultClinic from "../components/HistoryConsultClinic";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/history-consults" element={<HistoryConsultClinic />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;
