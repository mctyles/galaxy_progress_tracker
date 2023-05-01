import axios from "axios";

const DEV_API_URL = "http://localhost:4000/api";

export const usersController = axios.create({
  baseURL: DEV_API_URL + "/users",
});

export const studentsController = axios.create({
  baseURL: DEV_API_URL + "/students",
});

export const assignmentsController = axios.create({
  baseURL: DEV_API_URL + "/assignments",
});

export const categoriesController = axios.create({
  baseURL: DEV_API_URL + "/categories",
});

export const studentAssignmentsController = axios.create({
  baseURL: DEV_API_URL + "/student_assignments",
});
