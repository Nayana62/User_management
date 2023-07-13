import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getAllUsers = () => API.get("/users");
export const createNewUser = (formData) => API.post("/users", formData);
export const getUser = (userId) => API.get(`/users/${userId}`);
export const updateUser = (id, formData) => API.put(`/users/update/${id}`, formData);
export const deleteUser = (id) => API.delete(`/users/delete/${id}`);
