import { useContext, useState } from "react";
import { TiEdit } from "react-icons/ti";
import { IoLogOutSharp, IoTrashOutline } from "react-icons/io5";

import logo from "../../assets/img/seuPetS.png";
import { UserContext } from "../../contexts/UserContext";
import { PetContext } from "../../contexts/PetContext";

import { useNavigate } from "react-router-dom";
import petImage from "../../assets/img/petImage.png";
import EditPetModal from "../../components/EditPetModal";
import DeletePetModal from "../../components/DeletePetModal";

import { Container, LinkButton, Main } from "./styles";

function HistoryConsult() {
  const { setUser, listAllConsults } = useContext(UserContext);
  const { editModal, setEditModal, deleteModal, setDeleteModal, setPetId } =
    useContext(PetContext);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");

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
              //src={logo}
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
          <h3>Clientes:</h3>
          <div className="titles">
            <p className="list-pet">Nome</p>
            <p className="list-animal">Pet</p>
            <p className="list-newPet">Procedimento</p>
            <p className="list-edit">Consultas</p>
          </div>
          <div className="pet-data">
            {listAllConsults.map((consult) => (
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
      {editModal && <EditPetModal name={name} animal={animal} />}
      {deleteModal && <DeletePetModal />}
    </Container>
  );
}
export default HistoryConsult;
