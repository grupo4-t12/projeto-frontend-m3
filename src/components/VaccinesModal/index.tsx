import { Dispatch, SetStateAction, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ModalBoxVaccines, ModalContainer } from "./styles";

interface IVaccinesModalProps {
  setVaccineModal: Dispatch<SetStateAction<boolean>>;
}

const VaccinesModal = ({ setVaccineModal }: IVaccinesModalProps) => {
  const { listPets, listVaccines } = useContext(UserContext);

  return (
    <ModalContainer>
      <ModalBoxVaccines>
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
      {/* {listPets.map((pet) => (
        <ModalBoxVaccines key={pet.id}>
          <div className="title">
            <h2>{pet.name}</h2>
            <button onClick={() => setVaccineModal(false)}>X</button>
          </div>
          <div className="list">
            <h3>Histórico de vacinas:</h3>
            {listVaccines.map((vaccine) => (
              <>
                <div key={vaccine.id}>
                  <input type="checkbox" id={vaccine.tipo} />
                  <label htmlFor={vaccine.tipo}>{vaccine.tipo}</label>
                </div>
                <p>Data: {vaccine.data}</p>
              </>
            ))}
          </div>
        </ModalBoxVaccines>
      ))} */}
    </ModalContainer>
  );
};

export default VaccinesModal;
