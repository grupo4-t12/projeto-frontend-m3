import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import api from "../../services/index";

interface IPetContext {
  registerPet: (
    data: IRegisterPetsFunction,
    { idUser, token }: IListPetFuction
  ) => void;
  editPet: (data: IEditPet, { idPet, token }: IListPetFuction) => void;
  listPetUser: ({ idPet, token }: IListPetFuction) => void;
  deletePet: ({ idPet, token }: IListPetFuction) => void;
  listPets: IPet[] | [];
  setListPets: (data: IPet[] | []) => void;
  editModal: boolean;
  deleteModal: boolean;
  setEditModal: Dispatch<SetStateAction<boolean>>;
  setDeleteModal: Dispatch<SetStateAction<boolean>>;
}

// Interface para tipar as props:

interface IPetProps {
  children: ReactNode;
}

// Tipando a função registerPet:

export interface IRegisterPetsFunction {
  name: String;
  animal: String;
  userId: Number;
}

// Interface para a resposta da requisição de cadastro:

interface IRegisterPetsResponse {
  name: String;
  animal: String;
  userId: Number;
  id: Number;
}

// Tipando a função editPet:

export interface IEditPet {
  name: String;
  animal: String;
}

// Tipando a response da função editPet
interface IPet {
  name: String;
  animal: String;
  id: Number;
}

// Tipando os parâmetros passados as functons
interface IListPetFuction {
  idUser?: Number;
  idPet: Number;
  token: String;
}
export const PetContext = createContext<IPetContext>({} as IPetContext);

const PetProvider = ({ children }: IPetProps) => {
  const [listPets, setListPets] = useState<IPet[]>([]);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  function registerPet(
    formData: IRegisterPetsFunction,
    { idPet }: IListPetFuction
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

    setEditModal(false);
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

    setDeleteModal(false);
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
        editModal,
        deleteModal,
        setEditModal,
        setDeleteModal,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};
export default PetProvider;
