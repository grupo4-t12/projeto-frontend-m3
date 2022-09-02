import { Navigate } from "react-router-dom";
import DashboardClient from "../../components/DashboardClient";
import DashboardClinic from "../../components/DashboardClinic";

function Dashboard() {
  const token = localStorage.getItem("@TOKEN");
  const idUser = localStorage.getItem("@USERID");

  return token ? (
    idUser === "9" ? (
      <DashboardClinic />
    ) : (
      <DashboardClient />
    )
  ) : (
    <Navigate to="/login" />
  );
}

export default Dashboard;

//Email: matheus@mail.com
//Password: Senh@123
