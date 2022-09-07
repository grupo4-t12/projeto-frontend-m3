import { useContext } from "react";
import { PetContext } from "../../contexts/PetContext";
import { UserContext } from "../../contexts/UserContext";
import { ModalBoxVaccines, ModalContainer } from "./styles";

const VaccinesModal = () => {
  const { listPets, listVaccines } = useContext(UserContext);
  const { setVaccineModal } = useContext(PetContext);

  return (
    <ModalContainer>
      {/* <ModalBoxVaccines>
        <div className="title">
          <h2>Thor</h2>
          <button onClick={() => setVaccineModal(false)}>X</button>
        </div>
        <div className="list">
          <h3>Histórico de vacinas:</h3>
          <div>
            <input type="checkbox" id="Vermífugo" />
            <label htmlFor="Vermífugo">Vermífugo</label>
          </div>
          <p>Data: 22/06/21</p>

          <div>
            <input type="checkbox" id="V8 - 1°" />
            <label htmlFor="V8 - 1°">V8 - 1°</label>
          </div>
          <p>Data: 18/07/21</p>
        </div>
      </ModalBoxVaccines>
      <ModalBoxVaccines>
        <div className="title">
          <h2>Thor</h2>
          <button onClick={() => setVaccineModal(false)}>X</button>
        </div>
        <div className="list">
          <h3>Histórico de vacinas:</h3>
          <div>
            <input type="checkbox" id="Vermífugo2" />
            <label htmlFor="Vermífugo2">Vermífugo</label>
          </div>
          <p>Data: 22/06/21</p>

          <div>
            <input type="checkbox" id="V8 - 1°2" />
            <label htmlFor="V8 - 1°2">V8 - 1°</label>
          </div>
          <p>Data: 18/07/21</p>
        </div>
      </ModalBoxVaccines> */}
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
                  <div key={vaccine.id}>
                    <input type="checkbox" id={vaccine.tipo} />
                    <label htmlFor={vaccine.tipo}>{vaccine.tipo}</label>
                  </div>
                  <p>Data: {vaccine.data}</p>
                </div>
              </ModalBoxVaccines>
            )
        )
      )}
    </ModalContainer>
  );
};

export default VaccinesModal;
