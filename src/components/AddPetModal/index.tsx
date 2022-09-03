import { useContext } from "react";
import { useForm } from "react-hook-form";
import { PetContext } from "../../contexts/PetContext";
import { ModalBoxEdit, ModalContainer } from "./styles";

interface IRegisterPetsFunction {
  name: string;
  animal: string;
  userId: string;
}

const AddPetModal = () => {
  const { registerPet, setAddModal, idUser } = useContext(PetContext);
  const { register, handleSubmit } = useForm<IRegisterPetsFunction>();

  function onSubmit(formData: IRegisterPetsFunction) {
    formData.userId = idUser;
    registerPet(formData);
  }
  return (
    <ModalContainer>
      <ModalBoxEdit>
        <div>
          <h2>Adicionar pet:</h2>
          <button onClick={() => setAddModal(false)}>X</button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            placeholder="Digite o nome do seu pet"
            type="text"
            {...register("name")}
          />

          <label htmlFor="animal">Animal:</label>
          <input
            id="animal"
            placeholder="Qual é o seu animalzinho?"
            type="text"
            {...register("animal")}
          />

          <button
            onClick={() => setTimeout(() => setAddModal(false), 3000)}
            type="submit"
          >
            Adicionar
          </button>
        </form>
      </ModalBoxEdit>
    </ModalContainer>
  );
};

export default AddPetModal;
