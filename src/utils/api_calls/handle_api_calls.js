import axios from "axios";
import { API_BASE_URL } from "../../constants";
import { authenticationToken } from "../current_user_data";

const setTokenInHeader = () => {
  axios.defaults.headers.common["Authorization"] = authenticationToken();
};

const urlPath = (path) => {
  return API_BASE_URL + path;
};

export const get = (path) => {
  setTokenInHeader();

  return axios.get(urlPath(path)).then((response) => {
    return response;
  });
};

export const post = (path, data) => {
  if (path !== "/user/login" && path !== "/user/register") {
    setTokenInHeader();
  }

  return axios.post(urlPath(path), data).then((response) => {
    return response;
  });
};

export const put = (path, data) => {
  setTokenInHeader();

  return axios.put(urlPath(path), data).then((response) => {
    return response;
  });
};

export const destroy = (path) => {
  setTokenInHeader();

  return axios.delete(urlPath(path)).then((response) => {
    return response;
  });
};
