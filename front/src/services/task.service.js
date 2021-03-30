import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000/";

const deleteTask = (id) => {
  return axios.delete(API_URL + "tasks/" + id, { headers: authHeader() });
};

const editTask = (id, done) => {
  console.log(done);
  return axios.put(API_URL + "tasks/" + id, {
    done,
  }, { headers: authHeader() });
};

const saveTask = (name, projectId) => {
  console.log(name, projectId);
  return axios.post(API_URL + "tasks", {
    name,
    done: false,
    project: projectId,
  }, { headers: authHeader() });
};

// eslint-disable-next-line
export default {
  deleteTask,
  editTask,
  saveTask,
};
