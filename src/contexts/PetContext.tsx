import { createContext, useState, ReactNode } from "react";
import api from "../services/index";

interface IPetContext {
  registerPet: (
    data: IRegisterPetsFunction,
    { idUser }: IListPetFuction
  ) => void;
  editPet: (data: IEditPet, { idPet }: IListPetFuction) => void;
  listPetUser: ({ idUser }: IListPetFuction) => void;
  deletePet: ({ idPet }: IListPetFuction) => void;
  listPets: IPet[] | [];
  setListPets: (data: IPet[] | []) => void;
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
interface IPet {
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
  const [listPets, setListPets] = useState<IPet[]>([]);

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
  function editPet(formData: IEditPet, { idPet }: IListPetFuction) {
    const token = localStorage.getItem("@TOKEN");

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    api.patch(`/pets/${idPet}`, formData).then((response) => {
      return response;
    });
  }
  function listPetUser({ idUser }: IListPetFuction) {
    api.get<IPet[]>(`/pets?userId=${idUser}`).then((response) => {
      setListPets(response.data);
    });
  }
  function deletePet({ idPet }: IListPetFuction) {
    const token = localStorage.getItem("@TOKEN");

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    api.delete(`/pets/${idPet}`).then((response) => {
      return response;
    });
  }
  return (
    <PetContext.Provider
      value={{
        listPets,
        setListPets,
        registerPet,
        editPet,
        listPetUser,
        deletePet,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};
export default PetProvider;