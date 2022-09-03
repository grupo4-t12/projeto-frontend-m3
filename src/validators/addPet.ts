import * as yup from "yup";

export const addPetSchema = yup.object().shape({
  name: yup.string().required("Este campo é obrigatório!"),
  animal: yup.string().required("Este campo é obrigatório!"),
});
