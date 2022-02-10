import axios from "axios";
import { getToken } from "../helpers/auth";

const instance = axios.create({
  timeout: 20000,
});

instance.interceptors.request.use(function (config: any) {
  const token = getToken();

  if (!token) return config;

  config.headers.authorization = token;

  return config;
});

export default instance;
