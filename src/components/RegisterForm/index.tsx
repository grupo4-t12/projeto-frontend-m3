import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validators/registerUser";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import logo from "../../assets/img/seuPetS.png";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { DivForm } from "./style";
import { ToastContainer } from "react-toastify";

import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function RegisterForm() {
  let navigate = useNavigate();

  const { registerUser } = useContext(UserContext);

  // Função que redireciona para a página de login:

  function returnLogin(): void {
    navigate("/login");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({ resolver: yupResolver(registerSchema) });

  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <DivForm>
        <form onSubmit={handleSubmit(registerUser)}>
          <div className="container">
            <div className="header">
              <img
                src={logo}
                alt="logo-patas"
                className="animate__animated animate__heartBeat"
              />
            </div>

            <div className="content">
              <div className="input-icons">
                <FaUser className="icon" color="#5b5b5b" size={45} />
                <input
                  type="text"
                  placeholder="Usuário"
                  {...register("name")}
                />
              </div>
              <span>{errors.name?.message}</span>

              <div className="input-icons">
                <MdEmail className="icon" color="#5b5b5b" size={45} />
                <input
                  type="email"
                  placeholder="E-mail"
                  {...register("email")}
                />
              </div>
              <span>{errors.email?.message}</span>

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

              <div className="input-icons">
                <RiLockPasswordFill
                  className="icon"
                  color="#5b5b5b"
                  size={45}
                />
                <input
                  type="password"
                  placeholder="Confirme a senha"
                  {...register("confirmPassword")}
                />
              </div>
              <span>{errors.confirmPassword?.message}</span>

              <button type="submit">Cadastrar</button>
              <p>
                Já é nosso cliente?
                <button type="button" id="login-button" onClick={returnLogin}>
                  Fazer Login
                </button>
              </p>
            </div>
          </div>
        </form>
        <ToastContainer></ToastContainer>
      </DivForm>
    </>
  );
}

export default RegisterForm;
