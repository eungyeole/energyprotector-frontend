import { REGISTER_USER, LOGIN_USER, LOGOUT_USER, AUTH_USER } from "../hoc/type";
import { request } from "../utils/axios";
const USER_URL = "/api/web";

export function registerUser(dataToSubmit) {
  const data = request("post", USER_URL + "/register", dataToSubmit);
  return {
    type: REGISTER_USER,
    payload: data,
  };
}

export function loginUser(dataToSubmit) {
  const data = request("post", USER_URL + "/login", dataToSubmit);
  return {
    type: LOGIN_USER,
    payload: data,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
    payload: null,
  };
}

export function authUser() {
  const data = request("post", USER_URL + "/auth");
  return {
    type: AUTH_USER,
    payload: data,
  };
}