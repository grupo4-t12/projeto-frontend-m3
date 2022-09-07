import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ModalContainer } from "../EditPetModal/styles";
import { ModalBoxDelete } from "./styles";

const DeleteConsultModal = () => {
  const { setDeleteConsultModal, deleteConsult } = useContext(UserContext);

  return (
    <ModalContainer>
      <ModalBoxDelete>
        <h2>Deletar Consulta:</h2>
        <p>Esta ação não poderá ser revertida</p>

        <div>
          <button className="delete-button" onClick={deleteConsult}>
            Deletar mesmo assim
          </button>
          <button onClick={() => setDeleteConsultModal(false)}>Cancelar</button>
        </div>
      </ModalBoxDelete>
    </ModalContainer>
  );
};

export default DeleteConsultModal;
