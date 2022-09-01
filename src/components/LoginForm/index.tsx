import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Section } from "./styles";
import { IoPawSharp } from "react-icons/io5";

// Interface para formulário de Login:
export interface UserData {
  email: string;
  password: string;
}

function LoginForm() {
  // Função de Login:
  const { loginUser } = useContext(UserContext);

  // Validadores de input:
  const formSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Email necessário"),
    password: yup.string().required("Senha necessária"),
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
    <Section>
      <form onSubmit={handleSubmit(loginUser)}>
        <h1>
          SEU PET <IoPawSharp />
        </h1>
        <div>
          <label>Email:</label>
          <input type="text" placeholder="  ✉   Email" {...register("email")} />
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
        <p>Não possui uma conta? Cadastre-se </p>
      </form>
    </Section>
  );
}
export default LoginForm;
