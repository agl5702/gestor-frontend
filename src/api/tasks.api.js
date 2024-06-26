import axios from "axios";
const URL='https://tareas-crud-xco7.onrender.com'
// const URL ="http://localhost:8000";

const tasksApi = axios.create({
  baseURL: `https://gestor-contrase-as.onrender.com/passmanager/passmanager/passmanager/`,
});

export const getAllP = () => tasksApi.get("/");

export const getP = (id) => tasksApi.get(`/${id}`);

export const createP = (pass) => tasksApi.post("/", pass);

export const updateP = (id, pass) => tasksApi.put(`/${id}/`, pass);

export const deleteP= (id) => tasksApi.delete(`/${id}`);
