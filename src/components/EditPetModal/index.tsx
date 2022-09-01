import { useContext } from "react";
import { useForm } from "react-hook-form";
import { IPet, PetContext } from "../../contexts/PetContext";
import { ModalBoxEdit, ModalContainer } from "./styles";

interface IEditPetModalProps {
  name: string;
  animal: string;
}

const EditPetModal = ({ name, animal }: IEditPetModalProps) => {
  const { editPet, setEditModal } = useContext(PetContext);
  const { register, handleSubmit } = useForm<IPet>();

  return (
    <ModalContainer>
      <ModalBoxEdit>
        <div>
          <h2>Editar Pet:</h2>
          <button onClick={() => setEditModal(false)}>X</button>
        </div>

        <form onSubmit={handleSubmit(editPet)}>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            type="text"
            defaultValue={name}
            {...register("name")}
          />

          <label htmlFor="animal">Animal:</label>
          <input
            id="animal"
            type="text"
            defaultValue={animal}
            {...register("animal")}
          />

          <button type="submit">Editar</button>
        </form>
      </ModalBoxEdit>
    </ModalContainer>
  );
};

export default EditPetModal;
