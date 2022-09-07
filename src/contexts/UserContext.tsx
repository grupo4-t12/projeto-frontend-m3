import { createContext, useState, ReactNode, useEffect } from "react";
import api from "../services/index";
import { useNavigate } from "react-router-dom";
import { IPet } from "./PetContext";
import toast from "react-hot-toast";

// Interface para tipar o contexto:

interface IUserContext {
  user: ILoginUser | null;
  setUser: (data: ILoginUser | null) => void;
  registerUser: (data: IRegisterFunction) => void;
  loginUser: (data: ILoginFunction) => void;
  listUsers: IListUsers[] | [];
  setListUsers: (data: IListUsers[] | []) => void;
  listUsersClinic: () => void;
  token: String | null;
  listPets: IPet[] | [];
  toastSucess: (message: string) => void;
  toastFail: (message: string) => void;
  addConsultUser: (FormData: IRegisterConsultFunction) => void;
  addConsult: boolean;
  setAddConsult: (data: boolean) => void;
  listPetUser: (userId: string) => void;
  listConsultsUser: (idUser: string) => void;
  listConsults: IListConsults[] | [];
  listVaccines: IListVaccine[];
  listAllConsults: IListConsults[] | [];
  allConsults: () => void;
}

// Interface para tipar as props:

interface IUserProps {
  children: ReactNode;
}

// Tipando a função registerUser:

export interface IRegisterFunction {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Tipando a função loginUser:

export interface ILoginFunction {
  email: string;
  password: string;
}

// Interface para a resposta da requisição de cadastro:

interface IRegisterResponse {
  accessToken: string;
  user: IRegisterUser;
}

interface IRegisterUser {
  name: string;
  email: string;
  confirmPassword: string;
  id: string;
}

// Interface para a resposta da requisição de login:

interface ILoginResponse {
  accessToken: string;
  user: ILoginUser;
}

interface ILoginUser {
  email: string;
  id: string;
}

// Interface para a resposta lista de usuários

export interface IListUsers {
  name: string;
  email: string;
  id: string;
  consultas: IListConsults[];
}

// Interface para criação de consulta

export interface IRegisterConsultFunction {
  procedimento: string;
  pet: string;
  animal: string;
  valor: string;
  userId: string;
  id: string;
}

// Interface para a resposta de listagem de consultas

export interface IListConsults {
  procedimento: string;
  pet: string;
  animal: string;
  valor: string;
  id: string;
}

// Interface para função listVaccinePet

export interface IListVaccine {
  tipo: string;
  data: string;
  petId: string;
  id: string;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProps) => {
  const [user, setUser] = useState<ILoginUser | null>(null);
  const [listUsers, setListUsers] = useState<IListUsers[] | []>([]);
  const [listPets, setListPets] = useState<IPet[]>([]);
  const [listConsults, setListConsults] = useState<IListConsults[]>([]);
  const [addConsult, setAddConsult] = useState(false);
  const [listVaccines] = useState<IListVaccine[]>([]);
  const [listAllConsults, setListAllConsults] = useState<IListConsults[]>([]);

  let navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");

  // Função de toastify bem-sucedido

  function toastSucess(message: string) {
    toast(message, {
      icon: "😸",
    });
  }

  // Função de toastify mal-sucedido

  function toastFail(message: string) {
    toast.error(message, {
      icon: "😿",
    });
  }

  // Requisição de cadastro:

  function registerUser(formData: IRegisterFunction): void {
    api
      .post<IRegisterResponse>("/register", formData)
      .then(() => {
        toastSucess("Cadastro bem-sucedido!");
        setTimeout(() => navigate("/login"), 3000);
      })
      .catch((err) => {
        console.log(err);
        toastFail("Algo deu errado! Confira as informações e tente novamente");
      });
  }

  // Requisição de login:

  function loginUser(formData: ILoginFunction): void {
    api
      .post<ILoginResponse>("/login", formData)
      .then((response) => {
        setUser(response.data.user);
        listPetUser(response.data.user.id);
        listConsultsUser(response.data.user.id);

        localStorage.setItem("@TOKEN", response.data.accessToken);
        localStorage.setItem("@USERID", response.data.user.id);

        toastSucess("Login realizado com sucesso!");
        setTimeout(() => navigate("/dashboard"), 3000);

        if (response.data.user.id.toString() === "9") {
          listUsersClinic();
        }
      })
      .catch((err) => {
        console.log(err);
        toastFail("Algo deu errado! Confira as informações e tente novamente");
      });
  }

  // Requisição para listar usuários - Clínica

  function listUsersClinic() {
    api.get<IListUsers[]>("/users").then((response) => {
      setListUsers(response.data);
    });
  }

  // Requisição para listar pets

  function listPetUser(idUser: string | null) {
    api.get<IPet[]>(`/pets?userId=${idUser}`).then((response) => {
      setListPets(response.data);
    });
  }

  //Requisição para listar consultas do usuário

  function listConsultsUser(idUser: string | null) {
    api
      .get<IListUsers>(`/users/${idUser}?_embed=consultas`)
      .then((response) => {
        setListConsults(response.data.consultas);
      });
  }

  // Requisição para listar vacinas dos pets - cliente

  function listVaccinePet() {
    api.get<IPet>("/pets?_embed=vacinas").then((response) => {
      //setListVaccines(response.data.vacinas)
    });
  }

  //Requisição para listar todas as consultas

  function allConsults() {
    api.get<IListConsults[]>("/consultas").then((response) => {
      setListAllConsults(response.data);
    });
  }

  // Requisição para adicionar consulta

  function addConsultUser(formData: IRegisterConsultFunction) {
    console.log(formData);
    const token = localStorage.getItem("@TOKEN");

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    api
      .post<IRegisterConsultFunction>("/consultas", formData)
      .then((response) => {
        toastSucess("Consulta registrada com sucesso!");
        return response;
      })
      .catch((err) => {
        toastFail("Algo deu errado, tente novamente!");
        console.log(err);
      });

    setAddConsult(false);
  }

  // Mantém a página do usuário atualizada

  useEffect(() => {
    function loadUser() {
      const idUser = localStorage.getItem("@USERID");

      if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        listPetUser(idUser);
        listConsultsUser(idUser);
        listVaccinePet();

        if (idUser === "1") {
          listUsersClinic();
          allConsults();
        }
      } else {
        localStorage.clear();
      }
    }

    loadUser();
  }, [listPets, token]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        registerUser,
        loginUser,
        listUsers,
        setListUsers,
        listUsersClinic,
        token,
        listPets,
        toastSucess,
        toastFail,
        addConsultUser,
        addConsult,
        setAddConsult,
        listPetUser,
        listConsults,
        listConsultsUser,
        listVaccines,
        listAllConsults,
        allConsults,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
