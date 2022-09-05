import { useContext, useState } from "react";
import { IoLogOutSharp, IoPawSharp, IoAddCircle } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

import { UserContext } from "../../contexts/UserContext";

import petImage from "../../assets/petImage.png";

import { Container, LinkButton, Main } from "./styles";
import { useNavigate } from "react-router-dom";
import { PetContext } from "../../contexts/PetContext";
import AddPetModal from "../AddPetModal";
import { Toaster } from "react-hot-toast";
import AddConsultModal from "../AddConsultModal";

function DashboardClinic() {
  const {
    setUser,
    listUsers,
    setListUsers,
    addConsult,
    setAddConsult,
    listPetUser,
  } = useContext(UserContext);
  const { addModal, setAddModal, setIdUser } = useContext(PetContext);
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  function handleClick() {
    localStorage.clear();
    setUser(null);
  }
  function searching() {
    const busca = listUsers.filter((user) => {
      return user.name.toLowerCase().includes(search.trim().toLowerCase());
    });
    setListUsers(busca);
    console.log(listUsers);
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
          <div className="search-bar">
            <h3>Clientes:</h3>

            <div>
              <input
                type="text"
                placeholder="Pesquisar clien..."
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
              <IoSearch
                onClick={() => {
                  searching();
                  console.log(listUsers);
                }}
              />
            </div>
          </div>
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
                  <IoAddCircle
                    className="add-pets"
                    size={40}
                    onClick={() => {
                      setIdUser(user.id);
                      setAddModal(true);
                    }}
                  />
                  <IoAddCircle
                    className="add-consults"
                    size={40}
                    onClick={() => {
                      listPetUser(user.id);
                      setIdUser(user.id);
                      setAddConsult(true);
                    }}
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
      {addModal && <AddPetModal />}
      {addConsult && <AddConsultModal />}
    </Container>
  );
}
export default DashboardClinic;
