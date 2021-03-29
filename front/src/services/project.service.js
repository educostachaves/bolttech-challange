import axios from "axios";
import authHeader from "./auth-header";
import UserService from "./user.service";

const API_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000/";

const getProjectsByUser = () => {
  const user = UserService.getCurrentUser();
  return axios.get(API_URL + "projects/withTasks/" + user.id, { headers: authHeader() });
};

// eslint-disable-next-line
export default {
  getProjectsByUser,
};
