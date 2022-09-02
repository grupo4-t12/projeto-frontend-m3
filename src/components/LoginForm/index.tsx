import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Section } from "./styles";
import { Toaster } from "react-hot-toast";
import { IoPawSharp } from "react-icons/io5";

import { useNavigate } from "react-router-dom";

// Interface para formulário de Login:
export interface UserData {
  email: string;
  password: string;
}

function LoginForm() {
  let navigate = useNavigate();

  // Função de Login:
  const { loginUser } = useContext(UserContext);

  // Função que redireciona para a página de cadastro":

  function returnRegister(): void {
    navigate("/register");
  }

  // Validadores de input:
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .email("Digite um e-mail válido!")
      .required("O e-mail é obrigatório!"),
    password: yup.string().required("A senha é obrigatória!"),
  });

  // Tratamento do formulário:
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <Section>
        <form onSubmit={handleSubmit(loginUser)}>
          <h1>
            SEU PET <IoPawSharp />
          </h1>
          <div>
            <label>Email:</label>
            <input
              type="text"
              placeholder="  ✉   Email"
              {...register("email")}
            />
            <span>{errors.email?.message}</span>
          </div>
          <div>
            <label>Senha:</label>
            <input
              type="password"
              placeholder=" 🔒   Senha"
              {...register("password")}
            />
            <span>{errors.password?.message}</span>
          </div>
          <button type="submit">Login</button>
          <p>
            Não possui uma conta?
            <button type="button" id="register-button" onClick={returnRegister}>
              Cadastre-se
            </button>
          </p>
        </form>
      </Section>
    </>
  );
}
export default LoginForm;
