import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IoLogOutSharp, IoPawSharp } from "react-icons/io5";

import petImage from "../../assets/img/petImage.png";
import { UserContext } from "../../contexts/UserContext";

import { Main } from "./styles";
import { Container, LinkButton } from "../../components/DashboardClient/styles";

function ClientConsult() {
  const { setUser, listConsults } = useContext(UserContext);
  const navigate = useNavigate();

  function handleClick() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <Container>
      <Toaster position="top-right" reverseOrder={true} />
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
          <button onClick={() => navigate("/dashboard")}>Meus pets</button>
          <button onClick={() => navigate("/dashboard/consults")}>
            Consultas
          </button>
          <button>Vacinas</button>
          <button
            onClick={() => {
              window.open("https://calendly.com/axeellima/seupet-consulta");
            }}
          >
            Agendamentos
          </button>
        </div>
        <div className="consults-box">
          <h3>Histórico de consultas:</h3>
          <div className="titles">
            <p className="list-procedure">Procedimento:</p>
            <p className="list-animal">Animal:</p>
            <p className="list-pet">Pet:</p>
          </div>
          <div className="consult-data">
            {listConsults.map((consult) => (
              <div className="data" key={consult.id}>
                <p className="list-procedure">{consult.Procedimento}</p>
                <p className="list-animal">{consult.Animal}</p>
                <p className="list-pet">{consult.Pet}</p>
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

export default ClientConsult;
