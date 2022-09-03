import * as yup from "yup";

export const registerSchema = yup.object({
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
      "Formato: 8 caracteres, 1 letra maiúscula, 1 minúscula, 1 número e 1 caracter especial!"
    ),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "Você precisa digitar a mesma senha do campo anterior!"
    )
    .required("Você precisa confirmar sua senha!"),
});
