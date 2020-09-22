import client from "./client";

const login = (user) => client.post("/auth/login", user);

export default {
  login,
};
