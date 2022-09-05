import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addPetSchema } from "../../validators/addPet";
import { PetContext } from "../../contexts/PetContext";
import { ModalBoxEdit, ModalContainer } from "./styles";
import {
  IRegisterConsultFunction,
  UserContext,
} from "../../contexts/UserContext";

const AddConsultModal = () => {
  const { addConsultUser, listPets, setAddConsult } = useContext(UserContext);
  const { idUser } = useContext(PetContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterConsultFunction>({
    resolver: yupResolver(addPetSchema),
  });

  function onSubmit(formData: IRegisterConsultFunction) {
    formData.userId = idUser;
    addConsultUser(formData);
  }
  return (
    <ModalContainer>
      <ModalBoxEdit>
        <div>
          <h2>Adicionar consulta:</h2>
          <button onClick={() => setAddConsult(false)}>X</button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="procedimento">Procedimento:</label>
          <input
            id="procedimento"
            placeholder="Digite o procedimento realizado"
            type="text"
            {...register("procedimento")}
          />
          <span>{errors.procedimento?.message}</span>

          <label htmlFor="pet">Pet:</label>
          <select placeholder="Selecione o pet" id="pet" {...register("pet")}>
            {listPets.map((pet, index) => (
              <option value={pet.name} key={index}>
                {pet.name}
              </option>
            ))}
          </select>
          <span>{errors.pet?.message}</span>

          <label htmlFor="animal">Animal:</label>
          <input
            id="animal"
            placeholder="Digite o animal"
            type="text"
            {...register("animal")}
          />
          <span>{errors.animal?.message}</span>

          <label htmlFor="valor">Valor:</label>
          <input
            id="valor"
            placeholder="Digite o procedimento realizado"
            type="text"
            {...register("valor")}
          />
          <span>{errors.valor?.message}</span>
          <button type="submit">Adicionar</button>
        </form>
      </ModalBoxEdit>
    </ModalContainer>
  );
};

export default AddConsultModal;
