import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addVaccineSchema } from "../../validators/addVaccine";
import { PetContext } from "../../contexts/PetContext";
import { ModalBoxEdit, ModalContainer } from "./styles";
import { IPet } from "../../contexts/PetContext";
import api from "../../services";

interface IRegisterVaccineFunction {
  tipo: string;
  petId: string;
  data: string;
}

const AddVaccineModal = () => {
  const { setAddVaccine, idUser, addVaccinePet } = useContext(PetContext);
  const [listPetModal, setListPetModal] = useState<IPet[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterVaccineFunction>({
    resolver: yupResolver(addVaccineSchema),
  });

  function onSubmit(formData: IRegisterVaccineFunction) {
    addVaccinePet(formData);
  }

  function modalPetsList(idUser: string) {
    api.get<IPet[]>(`/pets?userId=${idUser}`).then((response) => {
      setListPetModal(response.data);
    });
  }

  modalPetsList(idUser);

  return (
    <ModalContainer>
      <ModalBoxEdit>
        <div>
          <h2>Adicionar Vacina:</h2>
          <button onClick={() => setAddVaccine(false)}>X</button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="tipo">Tipo:</label>
          <input
            id="tipo"
            placeholder="Ex: Antirrábica"
            type="text"
            {...register("tipo")}
          />
          <span>{errors.tipo?.message}</span>

          <label htmlFor="petId">Pet:</label>
          <select
            placeholder="Selecione o pet"
            id="petId"
            {...register("petId")}
          >
            {listPetModal.map((pet, index) => (
              <option value={pet.id} key={index}>
                {pet.name}
              </option>
            ))}
          </select>
          <span>{errors.petId?.message}</span>

          <label htmlFor="data">Data:</label>
          <input
            id="data"
            placeholder="Ex: 08/09/22"
            type="text"
            {...register("data")}
          />
          <span>{errors.data?.message}</span>

          <button type="submit">Adicionar</button>
        </form>
      </ModalBoxEdit>
    </ModalContainer>
  );
};

export default AddVaccineModal;
