import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editPetSchema } from "../../validators/editPet";
import { IPet, PetContext } from "../../contexts/PetContext";
import { ModalBoxEdit, ModalContainer } from "./styles";

interface IEditPetModalProps {
  name: string;
  animal: string;
}

const EditPetModal = ({ name, animal }: IEditPetModalProps) => {
  const { editPet, setEditModal } = useContext(PetContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPet>({
    resolver: yupResolver(editPetSchema),
  });

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
          <span>{errors.name?.message}</span>

          <label htmlFor="animal">Animal:</label>
          <input
            id="animal"
            type="text"
            defaultValue={animal}
            {...register("animal")}
          />
          <span>{errors.animal?.message}</span>

          <button type="submit">Editar</button>
        </form>
      </ModalBoxEdit>
    </ModalContainer>
  );
};

export default EditPetModal;
