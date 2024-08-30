import axios from "axios";

const api = axios.create({
  baseURL: "https://api.pokemontcg.io/v2/",
  params: "0a3f779d-430b-41e3-8188-49fd51242128",
});

export default api;
