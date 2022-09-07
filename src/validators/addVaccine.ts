import * as yup from "yup";

export const addVaccineSchema = yup.object().shape({
  tipo: yup.string().required("Este campo é obrigatório!"),
  petId: yup.string().required("Este campo é obrigatório!"),
  data: yup.string().required("Este campo é obrigatório!"),
});
