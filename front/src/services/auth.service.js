import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000/";

const register = (name, username, email, password) => {
  return axios.post(API_URL + "users", {
    name,
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "auth/login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

// eslint-disable-next-line
export default {
  register,
  login,
  logout,
};
