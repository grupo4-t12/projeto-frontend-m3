import axios from "axios";

const api = axios.create({
  baseURL: "https://api-projetofinal-grupo4.herokuapp.com/",
  timeout: 5000,
});

export default api;
