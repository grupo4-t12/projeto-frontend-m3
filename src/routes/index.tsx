import { Routes, Route } from "react-router-dom";

import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import HistoryConsult from "../pages/HistoryConsult";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/history-consults" element={<HistoryConsult />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;
