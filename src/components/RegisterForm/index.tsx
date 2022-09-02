import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
// import logoImage from "../../assets/img/logo.svg";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { DivForm } from "./style";
import { ToastContainer } from "react-toastify";
import { IoPawSharp } from "react-icons/io5";

import { useNavigate } from "react-router-dom";

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

  const schema = yup.object({
    name: yup.string().required("O nome é obrigatório!"),
    email: yup
      .string()
      .email("Digite um e-mail válido!")
      .required("O e-mail é obrigatório!"),
    password: yup
      .string()
      .required("A senha é obrigatória!")
      .matches(
        /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
        "A senha precisa ter pelo menos 8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caracter especial!"
      ),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        "Você precisa digitar a mesma senha do campo anterior!"
      )
      .required("Você precisa confirmar sua senha!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({ resolver: yupResolver(schema) });

  return (
    <>
      <DivForm>
        <form onSubmit={handleSubmit(registerUser)}>
          <div className="container">
            <div className="header">
              <h1>
                SEU PET <IoPawSharp />
              </h1>
              {/* <img src={logoImage} alt="logo-patas" /> */}
            </div>
            <div className="content">
              <div className="input-icons">
                <FaUser className="icon" color="#5b5b5b" />
                <input
                  type="text"
                  placeholder="Usuário"
                  {...register("name")}
                />
              </div>
              <span>{errors.name?.message}</span>

              <div className="input-icons">
                <MdEmail className="icon" color="#5b5b5b" />
                <input
                  type="email"
                  placeholder="E-mail"
                  {...register("email")}
                />
              </div>
              <span>{errors.email?.message}</span>

              <div className="input-icons">
                <RiLockPasswordFill className="icon" color="#5b5b5b" />
                <input
                  type="password"
                  placeholder="Senha"
                  {...register("password")}
                />
              </div>
              <span>{errors.password?.message}</span>

              <div className="input-icons">
                <RiLockPasswordFill className="icon" color="#5b5b5b" />
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
