import axios from "axios";
import decode, { JwtPayload } from "jwt-decode";
export const account = axios.create({
  baseURL: "http://localhost:20525/api/account/",
});
account.interceptors.request.use((config) => {
  const token = localStorage.getItem("userToke");
  if (token) {
    const user = decode<JwtPayload>(token);
    console.log(user);
  }

  config.headers = {
    Authorization: `Bearer ${token}`,
  };
  return config;
});
