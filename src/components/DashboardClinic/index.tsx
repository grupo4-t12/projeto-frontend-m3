import { useContext } from "react";
import { IoLogOutSharp, IoPawSharp, IoAddCircle } from "react-icons/io5";

import { UserContext } from "../../contexts/UserContext";

import petImage from "../../assets/petImage.png";

import { Container, LinkButton, Main } from "./styles";
import { useNavigate } from "react-router-dom";

function DashboardClinic() {
  const { setUser, listUsers } = useContext(UserContext);

  const navigate = useNavigate();

  function handleClick() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <Container>
      <header>
        <h1>
          SEU PET <IoPawSharp />
        </h1>
        <LinkButton onClick={handleClick} to="/">
          <IoLogOutSharp size={30} />
        </LinkButton>
      </header>
      <Main>
        <div className="menu">
          <button
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Nossos clientes
          </button>
          <button
            onClick={() => {
              navigate("/dashboard/history-consults");
            }}
          >
            Histórico consultas
          </button>
          <button
            onClick={() => {
              window.open("https://calendly.com/axeellima/seupet-consulta");
            }}
          >
            Agendamentos
          </button>
        </div>
        <div className="pet-box">
          <h3>Clientes:</h3>
          <div className="titles">
            <p className="list-pet">Cliente:</p>
            <p className="list-animal">E-mail:</p>
            <p className="list-newPet">Pets:</p>
            <p className="list-edit">Consultas:</p>
          </div>
          <div className="pet-data">
            {listUsers.map((user) => (
              <div className="data" key={user.id}>
                <p className="list-pet">{user.name}</p>
                <p className="list-animal">{user.email}</p>
                <div className="buttons-add">
                  <IoAddCircle className="add-pets" size={40} />
                  <IoAddCircle className="add-consults" size={40} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <aside>
          <p>Acompanhe seu pet com a gente, amar é cuidar!</p>
          <img src={petImage} alt="" />
          <span>Agende uma consulta</span>
        </aside>
      </Main>
    </Container>
  );
}
export default DashboardClinic;
