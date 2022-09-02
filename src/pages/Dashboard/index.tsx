import { useContext, useState } from "react";
import { TiEdit } from "react-icons/ti";
import { IoLogOutSharp, IoTrashOutline, IoPawSharp } from "react-icons/io5";

import { UserContext } from "../../contexts/UserContext";
import { PetContext } from "../../contexts/PetContext";

import petImage from "../../assets/petImage.png";
import EditPetModal from "../../components/EditPetModal";
import DeletePetModal from "../../components/DeletePetModal";

import { Container, LinkButton, Main } from "./styles";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const { setUser, listPets } = useContext(UserContext);
  const { editModal, setEditModal, deleteModal, setDeleteModal, setPetId } =
    useContext(PetContext);

  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");

  const token = localStorage.getItem("@TOKEN");

  function handleClick() {
    localStorage.clear();
    setUser(null);
  }

  return token ? (
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
          <button>Meus pets</button>
          <button>Consultas</button>
          <button>Vacinas</button>
          <button>Agendamentos</button>
        </div>
        <div className="pet-box">
          <h3>Meus Pets:</h3>
          <div className="pet-info">
            <p>Pet:</p>
            <p>Animal:</p>
            <p>Editar:</p>
          </div>
          <div className="pet-data">
            {listPets.map((pet) => (
              <div className="data" key={pet.id}>
                <p>{pet.name}</p>
                <p>{pet.animal}</p>
                <div className="buttons">
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
          <p>Acompanhe seu pet com a gente, Amar é cuidar!</p>
          <img src={petImage} alt="" />
          <span>Agende uma consulta</span>
        </aside>
      </Main>
      {editModal && <EditPetModal name={name} animal={animal} />}
      {deleteModal && <DeletePetModal />}
    </Container>
  ) : (
    <Navigate to={"/login"} />
  );
}

export default Dashboard;

//Email: matheus@mail.com
//Password: Senh@123
