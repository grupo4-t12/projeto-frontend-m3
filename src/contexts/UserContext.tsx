import { createContext, useState, ReactNode, useEffect } from "react";
import api from "../services/index";
import { useNavigate } from "react-router-dom";
import { IPet } from "./PetContext";

// Interface para tipar o contexto:

interface IUserContext {
  user: ILoginUser | null;
  setUser: (data: ILoginUser | null) => void;
  registerUser: (data: IRegisterFunction) => void;
  loginUser: (data: ILoginFunction) => void;
  listUsers: IUsersList | [];
  setListUsers: (data: IUsersList | []) => void;
  listUsersClinic: () => void;
  token: String | null;
  listPets: IPet[] | [];
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

// Interface para a resposta da lista de usuários:

interface IUsersList {
  users: ILoginUser[];
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProps) => {
  const [user, setUser] = useState<ILoginUser | null>(null);
  const [listUsers, setListUsers] = useState<IUsersList | []>([]);
  const [listPets, setListPets] = useState<IPet[]>([]);

  let navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");

  // Requisição de cadastro:

  function registerUser(formData: IRegisterFunction): void {
    api
      .post<IRegisterResponse>("/register", formData)
      .then(() => {
        setTimeout(() => navigate("/login"), 3000);
      })
      .catch((err) => console.log(err));
  }

  // Requisição de login:

  function loginUser(formData: ILoginFunction): void {
    api
      .post<ILoginResponse>("/login", formData)
      .then((response) => {
        setUser(response.data.user);
        listPetUser(response.data.user.id);
        localStorage.setItem("@TOKEN", response.data.accessToken);
        localStorage.setItem("@USERID", response.data.user.id);
        setTimeout(() => navigate("/dashboard"), 3000);
      })
      .catch((err) => console.log(err));
  }

  // Requisição para listar usuários - Clínica

  function listUsersClinic() {
    api.get<IUsersList>("/users").then((response) => {
      setListUsers(response.data);
    });
  }

  // Requisição para listar pets

  function listPetUser(idUser: string) {
    api.get<IPet[]>(`/pets?userId=${idUser}`).then((response) => {
      setListPets(response.data);
    });
  }

  // Mantém a página do usuário atualizada

  useEffect(() => {
    function loadUser() {
      const idUser = localStorage.getItem("@USERID");

      if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        api.get<IPet[]>(`/pets?userId=${idUser}`).then((response) => {
          setListPets(response.data);
        });
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
