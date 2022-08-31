import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import logoImage from "../../assets/img/logo.svg";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { DivForm } from "./style";

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function RegisterForm() {
  const { registerUser } = useContext(UserContext);

  const schema = yup.object({
    name: yup.string().required("Nome de usuário obrigatório"),
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("Email obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
        "Mensagem caso não passe na verificação."
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
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
              <h1>SEU PET</h1>
              <img src={logoImage} alt="logo-patas" />
            </div>
            <div className="content">
              <div className="input-icons">
                <FaUser className="icon" color="#5b5b5b" />
                <input
                  type="text"
                  placeholder="Usuário"
                  {...register("name")}
                />
                <small>{errors.name?.message}</small>
              </div>

              <div className="input-icons">
                <MdEmail className="icon" color="#5b5b5b" />
                <input
                  type="email"
                  placeholder="E-mail"
                  {...register("email")}
                />
                <small>{errors.email?.message}</small>
              </div>

              <div className="input-icons">
                <RiLockPasswordFill className="icon" color="#5b5b5b" />
                <input
                  type="password"
                  placeholder="Senha"
                  {...register("password")}
                />
                <small>{errors.password?.message}</small>
              </div>

              <div className="input-icons">
                <RiLockPasswordFill className="icon" color="#5b5b5b" />
                <input
                  type="password"
                  placeholder="Confirme a senha"
                  {...register("confirmPassword")}
                />
                <small>{errors.confirmPassword?.message}</small>
              </div>

              <button className="btnRegister" type="submit">
                Cadastrar
              </button>
            </div>
          </div>
        </form>
      </DivForm>
    </>
  );
}

export default RegisterForm;
