import { useContext } from "react";
import { IoLogOutSharp, IoTrashOutline } from "react-icons/io5";

import logo from "../../assets/img/seuPetS.png";
import { UserContext } from "../../contexts/UserContext";

import { useNavigate } from "react-router-dom";
import petImage from "../../assets/img/petImage.png";

import { Container, LinkButton, Main } from "./styles";
import DeleteConsultModal from "../../components/DeleteConsultModal";

function HistoryConsult() {
  const {
    setUser,
    listAllConsults,
    deleteConsultModal,
    setDeleteConsultModal,
    setConsultId,
  } = useContext(UserContext);

  const navigate = useNavigate();

  function handleClick() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <Container>
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
          <h3>Histórico de Atendimentos</h3>
          <div className="titles">
            <p className="list-pet">Pet</p>
            <p className="list-animal">Procedimento</p>
            <p className="list-cons">Valor</p>
            <p className="list-value">Deletar</p>
          </div>
          <div className="pet-data">
            {listAllConsults.map((consult) => (
              <div className="data" key={consult.id}>
                <p className="list-pet">{consult.pet}</p>
                <p className="list-cons">{consult.procedimento}</p>
                <p className="list-value">{consult.valor}</p>
                <div className="list-trash">
                  <IoTrashOutline
                    onClick={() => {
                      setConsultId(consult.id);
                      setDeleteConsultModal(true);
                    }}
                    size={23}
                  />
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
      {deleteConsultModal && <DeleteConsultModal />}
    </Container>
  );
}
export default HistoryConsult;
