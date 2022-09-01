import { useContext } from "react";
import { TiEdit } from "react-icons/ti";
import { IoLogOutSharp, IoTrashOutline, IoPawSharp } from "react-icons/io5";

import { UserContext } from "../../contexts/UserContext";
import { PetContext } from "../../contexts/PetContext/PetContext.";

import petImage from "../../assets/petImage.png";
import EditPetModal from "../../components/EditPetModal";
import DeletePetModal from "../../components/DeletePetModal";

import { Container, LinkButton, Main } from "./styles";

function Dashboard() {
  const { setUser } = useContext(UserContext);
  const { editModal, setEditModal, deleteModal, setDeleteModal } =
    useContext(PetContext);

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
            {/* {listPets.map((pet, index) => (
              <div className="data" key={index}>
                <p>{pet.name}</p>
                <p>{pet.animal}</p>
                <div className="buttons">
                  <TiEdit onClick={() => setEditModal(true)} size={28} />
                  <IoTrashOutline
                    onClick={() => setDeleteModal(true)}
                    size={23}
                  />
                </div>
              </div>
            ))} */}
            <div className="data">
              <p>Thor</p>
              <p>Cachorro</p>
              <div className="buttons">
                <TiEdit onClick={() => setEditModal(true)} size={28} />
                <IoTrashOutline
                  onClick={() => setDeleteModal(true)}
                  size={23}
                />
              </div>
            </div>
            <div className="data">
              <p>Thor</p>
              <p>Cachorro</p>
              <div className="buttons">
                <TiEdit onClick={() => setEditModal(true)} size={28} />
                <IoTrashOutline
                  onClick={() => setDeleteModal(true)}
                  size={23}
                />
              </div>
            </div>
          </div>
        </div>
        <aside>
          <p>Acompanhe seu pet com a gente, Amar é cuidar!</p>
          <img src={petImage} alt="" />
          <span>Agende uma consulta</span>
        </aside>
      </Main>
      {editModal && <EditPetModal />}
      {deleteModal && <DeletePetModal />}
    </Container>
  );
}

export default Dashboard;

//Email: matheus@mail.com
//Password: Senh@123
