import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IoLogOutSharp } from "react-icons/io5";

import logo from "../../assets/img/seuPetS.png";
import petImage from "../../assets/img/petImage.png";
import { UserContext } from "../../contexts/UserContext";

import { Main } from "./styles";
import { Container, LinkButton } from "../../components/DashboardClient/styles";
import { PetContext } from "../../contexts/PetContext";
import VaccinesModal from "../../components/VaccinesModal";

function ClientConsult() {
  const { setUser, listConsults } = useContext(UserContext);
  const { vaccineModal, setVaccineModal } = useContext(PetContext);
  const navigate = useNavigate();

  function handleClick() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <Container>
      <Toaster position="top-right" reverseOrder={true} />
      <header>
      <div className="containerHeader">
          <div className="header">
            <img
              src={logo}
              alt="logo-patas"
              className="animate__animated animate__heartBeat"
            />
          </div>
        </div>
        <div className="link">
          <LinkButton className="tagLink" onClick={handleClick} to="/">
            <IoLogOutSharp className="imgLink" size={30} />
          </LinkButton>
        </div>
      </header>
      <Main>
        <div className="menu">
          <button onClick={() => navigate("/dashboard")}>Meus pets</button>
          <button onClick={() => navigate("/dashboard/consults")}>
            Consultas
          </button>
          <button onClick={() => setVaccineModal(true)}>Vacinas</button>
          <button
            onClick={() => {
              window.open("https://calendly.com/axeellima/seupet-consulta");
            }}
          >
            Agendamentos
          </button>
        </div>
        <div className="consults-box">
          <h3>Histórico de consultas</h3>
          <div className="titles">
            <p className="list-procedure">Procedimento</p>
            <p className="list-animal">Animal</p>
            <p className="list-pet">Pet</p>
          </div>
          <div className="consult-data">
            {listConsults.map((consult) => (
              <div className="data" key={consult.id}>
                <p className="list-procedure">{consult.procedimento}</p>
                <p className="list-animal">{consult.animal}</p>
                <p className="list-pet">{consult.pet}</p>
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
      {vaccineModal && <VaccinesModal />}
    </Container>
  );
}

export default ClientConsult;
