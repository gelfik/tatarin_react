import axios from "axios";

const InitializeAxios = () => {
  const $axios = axios.create({
    baseURL: "https://izzibrain.gelfik.dev/api/tatar",
  });

  $axios.defaults.params = Object.fromEntries(
    new URLSearchParams(window.location?.search)
  );
  $axios.defaults.headers.post["Content-Type"] = "application/json";
  $axios.defaults.headers.put["Content-Type"] = "application/json";
  $axios.defaults.headers.patch["Content-Type"] = "application/json";

  return $axios;
};

export default InitializeAxios;
