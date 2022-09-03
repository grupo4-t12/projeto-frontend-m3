import * as yup from "yup";

export const editPetSchema = yup.object().shape({
  name: yup.string().required("Este campo é obrigatório!"),
  animal: yup.string().required("Este campo é obrigatório!"),
});
