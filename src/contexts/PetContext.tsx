import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

import api from "../services";
import { IListVaccine, UserContext } from "./UserContext";

interface IPetContext {
  registerPet: (data: IRegisterPetsFunction) => void;
  editPet(formData: IPet): void;
  deletePet: () => void;
  editModal: boolean;
  deleteModal: boolean;
  addModal: boolean;
  idUser: string;
  setAddModal: Dispatch<SetStateAction<boolean>>;
  setEditModal: Dispatch<SetStateAction<boolean>>;
  setDeleteModal: Dispatch<SetStateAction<boolean>>;
  setPetId: Dispatch<SetStateAction<string>>;
  setIdUser: Dispatch<SetStateAction<string>>;
  petId: string;
  addVaccine: boolean;
  setAddVaccine: (data: boolean) => void;
  addVaccinePet: (FormData: IRegisterVaccineFunction) => void;
  vaccineModal: boolean;
  setVaccineModal: Dispatch<SetStateAction<boolean>>;
}

// Interface para tipar as props:

interface IPetProps {
  children: ReactNode;
}

// Tipando a função registerPet:

export interface IRegisterPetsFunction {
  name: string;
  animal: string;
  userId: string;
}

// Interface para a resposta da requisição de cadastro:

interface IRegisterPetsResponse {
  name: string;
  animal: string;
  userId: string;
  id: string;
}

// Tipando a função editPet:

export interface IEditPet {
  name: string;
  animal: string;
}

// Tipando a response da função editPet

export interface IPet {
  name: string;
  animal: string;
  userId: string;
  id: string;
  vacinas: IListVaccine[];
}

// Interface para a criação de vacina

interface IRegisterVaccineFunction {
  tipo: string;
  petId: string;
  data: string;
}

export const PetContext = createContext<IPetContext>({} as IPetContext);

const PetProvider = ({ children }: IPetProps) => {
  const [petId, setPetId] = useState("");
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [idUser, setIdUser] = useState("");
  const { toastSucess, toastFail } = useContext(UserContext);
  const [addVaccine, setAddVaccine] = useState(false);
  const [vaccineModal, setVaccineModal] = useState(false);

  function registerPet(formData: IRegisterPetsFunction) {
    const token = localStorage.getItem("@TOKEN");

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    api
      .post<IRegisterPetsResponse>("/pets", formData)
      .then((response) => {
        toastSucess("Pet adicinado com sucesso!");
        return response;
      })
      .catch((err) => {
        toastFail("Algo deu errado, tente novamente!");
        console.log(err);
      });

    setAddModal(false);
  }

  function editPet(formData: IPet) {
    const token = localStorage.getItem("@TOKEN");

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    api
      .patch(`/pets/${petId}`, formData)
      .then((response) => {
        toastSucess("Alterações realizadas!");
        return response;
      })
      .catch((err) => {
        toastFail("Algo deu errado, tente novamente!");
        console.log(err);
      });

    setEditModal(false);
  }

  function deletePet() {
    const token = localStorage.getItem("@TOKEN");

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    api
      .delete(`/pets/${petId}`)
      .then((response) => {
        toastSucess("Pet deletado com sucesso!");
        return response;
      })
      .catch((err) => {
        toastFail("Algo deu errado, tente novamente!");
        console.log(err);
      });

    setDeleteModal(false);
  }

  // Requisição para adicionar vacina

  function addVaccinePet(formData: IRegisterVaccineFunction) {
    const token = localStorage.getItem("@TOKEN");

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    api
      .post<IRegisterVaccineFunction>("/vacinas", {
        tipo: formData.tipo,
        data: formData.data,
        petId: parseInt(formData.petId),
      })
      .then((response) => {
        toastSucess("Vacina registrada com sucesso!");
        return response;
      })
      .catch((err) => {
        toastFail("Algo deu errado, tente novamente!");
        console.log(err);
      });

    setAddVaccine(false);
  }

  return (
    <PetContext.Provider
      value={{
        registerPet,
        editPet,
        deletePet,
        editModal,
        deleteModal,
        addModal,
        idUser,
        setAddModal,
        setEditModal,
        setDeleteModal,
        setPetId,
        setIdUser,
        petId,
        addVaccine,
        setAddVaccine,
        addVaccinePet,
        vaccineModal,
        setVaccineModal,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};
export default PetProvider;
