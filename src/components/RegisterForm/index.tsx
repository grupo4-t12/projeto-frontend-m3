import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import logo from "../../assets/img/seuPetS.png";
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
              <img src={logo} alt="logo-patas" className="animate__animated animate__heartBeat" />
            </div>

            <div className="content">
              <div className="input-icons">
                <FaUser className="icon" color="#5b5b5b" size={45} />
                <input
                  type="text"
                  placeholder="Usuário"
                  {...register("name")}
                />
                <span>{errors.name?.message}</span>
              </div>

              <div className="input-icons">
                <MdEmail className="icon" color="#5b5b5b" size={45} />
                <input
                  type="email"
                  placeholder="E-mail"
                  {...register("email")}
                />
                <span>{errors.email?.message}</span>
              </div>

              <div className="input-icons">
                <RiLockPasswordFill className="icon" color="#5b5b5b" size={45} />
                <input
                  type="password"
                  placeholder="Senha"
                  {...register("password")}
                />
                <span>{errors.password?.message}</span>
              </div>

              <div className="input-icons">
                <RiLockPasswordFill className="icon" color="#5b5b5b" size={45} />
                <input
                  type="password"
                  placeholder="Confirme a senha"
                  {...register("confirmPassword")}
                />
                <span>{errors.confirmPassword?.message}</span>
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
