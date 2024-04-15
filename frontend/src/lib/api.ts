import axios from "axios";

export const apiUrl = "https://brasilapi.com.br/api/cep/v1/";

export const api = axios.create({
  baseURL: apiUrl,
});
