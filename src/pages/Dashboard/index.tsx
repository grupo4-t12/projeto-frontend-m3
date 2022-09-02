import { Navigate } from "react-router-dom";
import DashboardClient from "../../components/DashboardClient";
import DashboardClinic from "../../components/DashboardClinic";

function Dashboard() {
  const token = localStorage.getItem("@TOKEN");
  const idUser = localStorage.getItem("@USERID");

  return token ? (
    idUser === "1" ? (
      <DashboardClinic />
    ) : (
      <DashboardClient />
    )
  ) : (
    <Navigate to="/login" />
  );
}

export default Dashboard;

// Login do "dono da clínica":

// Email: kenzinho@mail.com
// Password: 123456
