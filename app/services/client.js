import { create } from "apisauce";

const ApiClient = create({
  baseURL: "http://192.168.0.5:45455/api",
  headers: {
    "Content-Type": "application/vnd.api+json",
    Accept: "v1",
  },
});

export default ApiClient;
