import { useAuth } from "@/store";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const API_HOST = !import.meta.env.DEV
  ? import.meta.env.API_HOST
  : "http://localhost:3000";

const request = axios.create({
  baseURL: API_HOST,
});

const valiateToken = (token: string) => {
  const { exp } = jwtDecode<Record<"exp", number>>(token);
  const expiredDate = new Date(exp * 1000);
  if (new Date() > expiredDate) {
    return false;
  }
  return true;
};

const getRefreshToken = async (token: string) => {
  const { data, status } = await axios.post(API_HOST + "/auth/refresh", {
    refreshToken: token,
  });
  if (status === 201) {
    useAuth.setState({
      token: data.token,
    });
    return data.token;
  }
  return "";
};

request.interceptors.request.use(async (request) => {
  const { token, refreshToken, isLoggedin } = useAuth.getState();
  if (!isLoggedin) return request;
  if (valiateToken(token)) {
    request.headers = {
      Authorization: `Bearer ${token}`,
    };
  } else {
    const newToken = await getRefreshToken(refreshToken);
    console.warn("[AUTH] token expired; request refreshToken");
    if (newToken) {
      useAuth.setState({
        token: newToken,
      });
      request.headers = {
        Authorization: `Bearer ${newToken}`,
      };
    } else {
      console.error("[AUTH] token expired; request refreshToken");
      useAuth.getState().logout();
      throw new Error("[AUTH] refresh token fail ! logout");
    }
  }
  return request;
});

export default request;
