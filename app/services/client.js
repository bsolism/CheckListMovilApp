import { create } from "apisauce";

const ApiClient = create({
  baseURL: "http://192.168.0.5:45455/api",
});

export default ApiClient;
