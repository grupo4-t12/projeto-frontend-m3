import { useContext } from "react";
import { PetContext } from "../../contexts/PetContext";
import { ModalContainer } from "../EditPetModal/styles";
import { ModalBoxDelete } from "./styles";

const DeletePetModal = () => {
  const { setDeleteModal } = useContext(PetContext);

  return (
    <ModalContainer>
      <ModalBoxDelete>
        <h2>Deletar Pet:</h2>
        <p>Está ação não poderá ser revertida</p>

        <div>
          <button className="delete-button">Deletar mesmo assim</button>
          <button onClick={() => setDeleteModal(false)}>Cancelar</button>
        </div>
      </ModalBoxDelete>
    </ModalContainer>
  );
};

export default DeletePetModal;
