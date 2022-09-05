import { useContext, useState } from "react";
import { TiEdit } from "react-icons/ti";
import { IoLogOutSharp, IoTrashOutline, IoPawSharp } from "react-icons/io5";

import { UserContext } from "../../contexts/UserContext";
import { PetContext } from "../../contexts/PetContext";

import { useNavigate } from "react-router-dom";
import petImage from "../../assets/img/petImage.png";
import EditPetModal from "../../components/EditPetModal";
import DeletePetModal from "../../components/DeletePetModal";

import { Container, LinkButton, Main } from "./styles";

function HistoryConsult() {
  const { setUser, listPets } = useContext(UserContext);
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
            {listPets.map((pet) => (
              <div className="data" key={pet.id}>
                <p className="list-pet">{pet.name}</p>
                <p className="list-animal">{pet.animal}</p>
                <div className="buttons list-edit">
                  <TiEdit
                    onClick={() => {
                      setPetId(pet.id);
                      setName(pet.name);
                      setAnimal(pet.animal);
                      setEditModal(true);
                    }}
                    size={28}
                  />
                  <IoTrashOutline
                    onClick={() => {
                      setPetId(pet.id);
                      setDeleteModal(true);
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
      {editModal && <EditPetModal name={name} animal={animal} />}
      {deleteModal && <DeletePetModal />}
    </Container>
  );
}
export default HistoryConsult;
