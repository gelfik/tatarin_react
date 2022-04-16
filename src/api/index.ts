import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Test } from "../models/test";

const api = "https://izzibrain.gelfik.dev/api/tatar";

const responseBody = <TResponse>(res: AxiosResponse<TResponse>) => {
  return res;
};

const searchQueryParams = Object.fromEntries(
  new URLSearchParams(window.location?.search)
);

axios.defaults.params = searchQueryParams;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";
axios.defaults.headers.patch["Content-Type"] = "application/json";

const post = <TResponse, TBody extends any = any>(
  url: string,
  body?: TBody,
  params?: any
) => {
  const { withCredentials = false } = params || {};

  const _o: AxiosRequestConfig = {
    withCredentials: withCredentials,
  };

  return axios.post<TResponse>(`${api}${url}`, body, _o).then((data) => {
    return responseBody<TResponse>(data);
  });
};

const get = <TResponse>(url: string, params?: any) => {
  const { withCredentials = false } = params || {};

  const _o: AxiosRequestConfig = {
    withCredentials: withCredentials,
  };

  return axios.get<TResponse>(`${api}${url}`, _o).then((data) => {
    return responseBody<TResponse>(data);
  });
};

const test = {
  generate_test: () => get<Test[]>("/generate_test"),
};

const auth = {
  // logIn: (data: TLogin) => post<TUser>('/auth/login/', data),
  logOut: () => post("/auth/logout/"),
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  test,
  auth,
};
