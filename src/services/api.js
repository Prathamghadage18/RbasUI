import axios from "axios";

const API_URL = "http://localhost:5000";

// Users API
export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios.post(`${API_URL}/users`, user);
  return response.data;
};

export const updateUser = async (id, user) => {
  const response = await axios.put(`${API_URL}/users/${id}`, user);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${API_URL}/users/${id}`);
  return response.data;
};

// Roles API
export const getRoles = async () => {
  const response = await axios.get(`${API_URL}/roles`);
  return response.data;
};

export const createRole = async (role) => {
  const response = await axios.post(`${API_URL}/roles`, role);
  return response.data;
};

export const updateRole = async (id, role) => {
  const response = await axios.put(`${API_URL}/roles/${id}`, role);
  return response.data;
};

export const deleteRole = async (id) => {
  const response = await axios.delete(`${API_URL}/roles/${id}`);
  return response.data;
};

// Permissions API (if required)
export const getPermissions = async () => {
  const response = await axios.get(`${API_URL}/permissions`);
  return response.data;
};
