import axios from "axios";

const API_URL =
  "https://galaxy-progress-tracker-468e7253b50a.herokuapp.com/api";

export const usersController = axios.create({
  baseURL: API_URL + "/users",
});

export const studentsController = axios.create({
  baseURL: API_URL + "/students",
});

export const assignmentsController = axios.create({
  baseURL: API_URL + "/assignments",
});

export const categoriesController = axios.create({
  baseURL: API_URL + "/categories",
});

export const studentAssignmentsController = axios.create({
  baseURL: API_URL + "/student_assignments",
});

export const s3URLController = axios.create({
  baseURL: API_URL + "/s3url",
});
