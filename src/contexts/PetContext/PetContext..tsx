import { createContext, useState, ReactNode } from "react";
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
}
export interface IRegisterPetsFunction {
  name: String;
  animal: String;
  userId: Number;
}
interface IRegisterPetsResponse {
  name: String;
  animal: String;
  userId: Number;
  id: Number;
}
export interface IEditPet {
  name: String;
  animal: String;
}
interface IPet {
  name: String;
  animal: String;
  id: Number;
}
interface IListPetFuction {
  idUser?: Number;
  idPet: Number;
  token: String;
}
interface IPetProps {
  children: ReactNode;
}
export const PetContext = createContext<IPetContext>({} as IPetContext);

const PetProvider = ({ children }: IPetProps) => {
  const [listPets, setListPets] = useState<IPet[]>([]);

  function registerPet(
    formData: IRegisterPetsFunction,
    { idPet, token }: IListPetFuction
  ) {
    api.post<IRegisterPetsResponse>("/pets", formData).then((response) => {
      return response;
    });
  }
  function editPet(formData: IEditPet, { idPet, token }: IListPetFuction) {
    api.patch(`/pets/${idPet}`, formData).then((response) => {
      return response;
    });
  }
  function listPetUser({ idUser, token }: IListPetFuction) {
    api.get<IPet[]>(`/pets?userId=${idUser}`).then((response) => {
      setListPets(response.data);
    });
  }
  function deletePet({ idPet, token }: IListPetFuction) {
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
