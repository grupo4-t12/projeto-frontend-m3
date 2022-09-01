import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function Dashboard() {
  let navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  // Função para o botão de logout:

  function logout(): void {
    setUser(null);
    localStorage.clear();
    navigate("/login");
  }

  return (
    <>
      <button type="button" onClick={logout}>
        Logout
      </button>
      <p>Bem-vindo!!!</p>
    </>
  );
}

export default Dashboard;
