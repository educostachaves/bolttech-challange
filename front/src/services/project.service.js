import axios from "axios";
import authHeader from "./auth-header";
import UserService from "./user.service";

const API_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000/";

const getProjectsByUser = () => {
  const user = UserService.getCurrentUser();
  return axios.get(API_URL + "projects/withTasks/" + user.id, { headers: authHeader() });
};

const deleteProject = (id) => {
  return axios.delete(API_URL + "projects/" + id, { headers: authHeader() });
};

const saveProject = (name) => {
  const user = UserService.getCurrentUser();
  return axios.post(API_URL + "projects", {
    name,
    user: user.id,
  });
};

// eslint-disable-next-line
export default {
  getProjectsByUser,
  deleteProject,
  saveProject,
};
