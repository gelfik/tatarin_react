import axios from "axios";

const InitializeAxios = () => {
  const $axios = axios.create({
    baseURL: "https://izzibrain.gelfik.dev/api/tatar",
  });

  const queryParams = {};
  const params = window.location?.search.slice(
    window.location?.search.indexOf("?") + 1
  );

  const processQueryParam = (key, value) => {
    if (typeof value === "string") {
      queryParams[key] = value;
    }
  };

  const formattedSearch = params.startsWith("?") ? params.slice(1) : params;

  for (const param of formattedSearch.split("&")) {
    const [key, value] = param.split("=");
    processQueryParam(key, value);
  }

  $axios.defaults.params = queryParams;
  $axios.defaults.headers.post["Content-Type"] = "application/json";
  $axios.defaults.headers.put["Content-Type"] = "application/json";
  $axios.defaults.headers.patch["Content-Type"] = "application/json";

  return $axios;
};

export default InitializeAxios;
