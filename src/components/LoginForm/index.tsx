import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validators/loginUser";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Section } from "./styles";
import logo from "../../assets/img/seuPetS.png";
import { Toaster } from "react-hot-toast";

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

  // Tratamento do formulário:

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <Section>
        <form onSubmit={handleSubmit(loginUser)}>
          <div className="container">
            <div className="header">
              <img
                src={logo}
                alt="logo-seu-pet"
                className="animate__animated animate__heartBeat"
              />
            </div>
            <div className="content">
              <label>Digite seu e-mail:</label>
              <div className="input-icons">
                <MdEmail className="icon" color="#5b5b5b" size={45} />
                <input type="text" placeholder="Email" {...register("email")} />
              </div>
              <span>{errors.email?.message}</span>

              <label>Digite sua senha:</label>
              <div className="input-icons">
                <RiLockPasswordFill
                  className="icon"
                  color="#5b5b5b"
                  size={45}
                />
                <input
                  type="password"
                  placeholder="Senha"
                  {...register("password")}
                />
              </div>
              <span>{errors.password?.message}</span>

              <button type="submit">Login</button>
              <p>
                Não possui uma conta?
                <button
                  type="button"
                  id="register-button"
                  onClick={returnRegister}
                >
                  Cadastre-se
                </button>
              </p>
            </div>
          </div>
        </form>
      </Section>
    </>
  );
}
export default LoginForm;
