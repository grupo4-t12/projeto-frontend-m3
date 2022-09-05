import * as yup from "yup";

export const addConsultSchema = yup.object().shape({
  procedimento: yup.string().required("Este campo é obrigatório!"),
  pet: yup.string().required("Este campo é obrigatório!"),
  animal: yup.string().required("Este campo é obrigatório!"),
  valor: yup.string().required("Este campo é obrigatório!"),
});
