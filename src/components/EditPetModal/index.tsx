import { useContext } from "react";
import { PetContext } from "../../contexts/PetContext";
import { ModalBoxEdit, ModalContainer } from "./styles";

const EditPetModal = () => {
  const { setEditModal } = useContext(PetContext);

  return (
    <ModalContainer>
      <ModalBoxEdit>
        <div>
          <h2>Editar Pet:</h2>
          <button onClick={() => setEditModal(false)}>X</button>
        </div>

        <form>
          <label htmlFor="name">Nome:</label>
          <input id="name" type="text" placeholder="Thor" />

          <label htmlFor="animal">Animal:</label>
          <input id="animal" type="text" placeholder="Cachorro" />

          <button>Editar</button>
        </form>
      </ModalBoxEdit>
    </ModalContainer>
  );
};

export default EditPetModal;
