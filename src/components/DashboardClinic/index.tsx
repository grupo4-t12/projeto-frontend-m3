import { useContext, useState } from "react";
import { IoLogOutSharp, IoPawSharp, IoAddCircle } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

import { UserContext } from "../../contexts/UserContext";

import petImage from "../../assets/img/petImage.png";

import { Container, LinkButton, Main } from "./styles";
import { useNavigate } from "react-router-dom";
import { PetContext } from "../../contexts/PetContext";
import AddPetModal from "../AddPetModal";
import { Toaster } from "react-hot-toast";
import AddConsultModal from "../AddConsultModal";
import AddVaccineModal from "../AddVaccineModal";

import { IListUsers } from "../../contexts/UserContext";

import UsersCardList from "../UsersList";

function DashboardClinic() {
  const { setUser, listUsers, addConsult, setAddConsult, listPetUser } =
    useContext(UserContext);
  const { addModal, setAddModal, setIdUser, addVaccine, setAddVaccine } =
    useContext(PetContext);
  const [search, setSearch] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<IListUsers[] | []>([]);
  const navigate = useNavigate();

  function handleClick() {
    localStorage.clear();
    setUser(null);
  }

  function searchUser(inputValue: string) {
    setFilteredUsers(
      listUsers.filter((element) =>
        element.name.toLowerCase().includes(inputValue)
      )
    );
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
                placeholder="Pesquisar"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
              <IoSearch
                onClick={() => {
                  searchUser(search);
                }}
              />
            </div>
          </div>
          <div className="titles">
            <p className="list-pet">Cliente:</p>
            <p className="list-animal">E-mail:</p>
            <p className="list-newPet">Pets:</p>
            <p className="list-vaccine">Vacinas:</p>
            <p className="list-edit">Consultas:</p>
          </div>
          <div className="pet-data">
            {filteredUsers.length !== 0 ? (
              <UsersCardList
                users={filteredUsers}
                IoAddCircle={IoAddCircle}
                setIdUser={setIdUser}
                setAddModal={setAddModal}
                listPetUser={listPetUser}
                setAddConsult={setAddConsult}
                setAddVaccine={setAddVaccine}
              />
            ) : (
              <UsersCardList
                users={listUsers}
                IoAddCircle={IoAddCircle}
                setIdUser={setIdUser}
                setAddModal={setAddModal}
                listPetUser={listPetUser}
                setAddConsult={setAddConsult}
                setAddVaccine={setAddVaccine}
              />
            )}
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
      {addVaccine && <AddVaccineModal />}
    </Container>
  );
}
export default DashboardClinic;
