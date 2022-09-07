import { useContext } from "react";
import { PetContext } from "../../contexts/PetContext";
import { UserContext } from "../../contexts/UserContext";
import { ModalBoxVaccines, ModalContainer } from "./styles";

const VaccinesModal = () => {
  const { listPets, listVaccines } = useContext(UserContext);
  const { setVaccineModal } = useContext(PetContext);

  return (
    <ModalContainer>
      {listVaccines.map((vaccine) =>
        listPets.map(
          (pet) =>
            vaccine.petId === pet.id && (
              <ModalBoxVaccines key={pet.id}>
                <div className="title">
                  <h2>{pet.name}</h2>
                  <button onClick={() => setVaccineModal(false)}>X</button>
                </div>
                <div className="list">
                  <h3>Histórico de vacinas:</h3>
                  <p>{vaccine.tipo}</p>
                  <span>Data: {vaccine.data}</span>
                </div>
              </ModalBoxVaccines>
            )
        )
      )}
    </ModalContainer>
  );
};

export default VaccinesModal;
