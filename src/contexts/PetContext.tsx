import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

import api from "../services";

interface IPetContext {
  registerPet: (
    data: IRegisterPetsFunction,
    { idUser }: IListPetFuction
  ) => void;
  editPet(formData: IPet): void;
  deletePet: () => void;
  editModal: boolean;
  deleteModal: boolean;
  setEditModal: Dispatch<SetStateAction<boolean>>;
  setDeleteModal: Dispatch<SetStateAction<boolean>>;
  setPetId: Dispatch<SetStateAction<string>>;
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
  id: string;
}

// Tipando os parâmetros passados as functons
interface IListPetFuction {
  idUser?: string;
  idPet: string;
  token: string;
}
export const PetContext = createContext<IPetContext>({} as IPetContext);

const PetProvider = ({ children }: IPetProps) => {
  const [petId, setPetId] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  function registerPet(
    formData: IRegisterPetsFunction
    // { idPet }: IListPetFuction
  ) {
    const token = localStorage.getItem("@TOKEN");

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    api.post<IRegisterPetsResponse>("/pets", formData).then((response) => {
      return response;
    });
  }
  function editPet(formData: IPet) {
    const token = localStorage.getItem("@TOKEN");

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    api
      .patch(`/pets/${petId}`, formData)
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(err));

    setEditModal(false);
  }

  function deletePet() {
    const token = localStorage.getItem("@TOKEN");

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    api.delete(`/pets/${petId}`).then((response) => {
      return response;
    });

    setDeleteModal(false);
  }
  return (
    <PetContext.Provider
      value={{
        registerPet,
        editPet,
        deletePet,
        editModal,
        deleteModal,
        setEditModal,
        setDeleteModal,
        setPetId,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};
export default PetProvider;
