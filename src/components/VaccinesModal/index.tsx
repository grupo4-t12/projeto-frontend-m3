import { useContext } from "react";
import { PetContext } from "../../contexts/PetContext";
import { UserContext } from "../../contexts/UserContext";
import { ModalBoxVaccines, ModalContainer, NoPetBoxVaccines } from "./styles";

const VaccinesModal = () => {
  const { listPets, listVaccines } = useContext(UserContext);
  const { setVaccineModal } = useContext(PetContext);

  return listPets.length > 0 ? (
    <ModalContainer>
      {listPets.map((pet) => {
        const filteredVaccines = listVaccines.filter(
          (vaccine) => vaccine.petId === pet.id
        );

        return filteredVaccines.length > 0 ? (
          <ModalBoxVaccines key={pet.id}>
            <div className="title">
              <h2>{pet.name}</h2>
              <button onClick={() => setVaccineModal(false)}>X</button>
            </div>
            <h3>Histórico de vacinas:</h3>
            {filteredVaccines.map(
              (vaccine) =>
                vaccine.petId === pet.id && (
                  <div key={vaccine.id} className="list">
                    <p>{vaccine.tipo}</p>
                    <span>Data: {vaccine.data}</span>
                  </div>
                )
            )}
          </ModalBoxVaccines>
        ) : (
          <ModalBoxVaccines>
            <div className="title">
              <h2>{pet.name}</h2>
              <button onClick={() => setVaccineModal(false)}>X</button>
            </div>
            <h3>Histórico de vacinas:</h3>
            <p>Seu pet ainda não foi vacinado! Agende uma consulta!</p>
          </ModalBoxVaccines>
        );
      })}
    </ModalContainer>
  ) : (
    <ModalContainer>
      <NoPetBoxVaccines>
        <button onClick={() => setVaccineModal(false)}>X</button>
        <p>Você ainda não possui pets registrados em sua conta!</p>
      </NoPetBoxVaccines>
    </ModalContainer>
  );
};

export default VaccinesModal;
